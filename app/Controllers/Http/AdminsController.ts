import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default new class AdminsController {
    public async editUser({ request, response, params }: HttpContextContract) {
        const userId = params.id;
        const newEmail = request.input('newEmail');

        try {
            const user = await User.find(userId);

            if (user) {
                user.email = newEmail;
                await user.save()

                return response.status(200).json({ message: 'User email updated successfully' });
            } else {
                return response.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

    public async editUserStatus({ response, params }: HttpContextContract) {
        const userId = params.id

        try {
            const user = await User.find(userId)

            if (user) {
                user.status = !user.status
                await user.save()

                return response.status(200).json({ message: 'User status changed successfully' });
            } else {
                return response.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

    public async deleteUser({ response, params }: HttpContextContract) {
        const userId = params.id

        try {
            const user = await User.find(userId)

            if (user) {
                await user.delete();
                return response.status(200).json({ message: 'User deleted successfully' });
            } else {
                return response.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }
}
