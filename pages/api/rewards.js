// pages/api/rewards.js

import { rewardsGenerator } from '../../utils/rewardsGenerator';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const rewards = await rewardsGenerator();
            return res.status(200).json({ success: true, rewards });
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
    } else {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}