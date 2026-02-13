import { StatCardProps } from '../components/molecules/StatCard';
import { AssetRowProps } from '../components/molecules/AssetRow';
import { QuickActionItem } from '../components/organisms/QuickActionsRow';

export const dashboardStats: StatCardProps[] = [
  {
    title: '24h change',
    value: '+3.4%',
    caption: 'Market momentum',
  },
  {
    title: 'Total assets',
    value: '8',
    caption: 'Across wallets',
  },
  {
    title: 'Best performer',
    value: 'SOL',
    caption: '+8.1% today',
  },
  {
    title: 'Avg. cost',
    value: '$1,240',
    caption: 'Per asset',
  },
];

export const quickActions: QuickActionItem[] = [
  { label: 'Send', iconLabel: 'S' },
  { label: 'Receive', iconLabel: 'R' },
  { label: 'Buy', iconLabel: 'B' },
  { label: 'Sell', iconLabel: 'L' },
];

export const assets: AssetRowProps[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '1.245 BTC',
    price: '$63,450',
    change: '+2.8%',
    changePositive: true,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '9.12 ETH',
    price: '$3,420',
    change: '+1.1%',
    changePositive: true,
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    balance: '220 SOL',
    price: '$138.42',
    change: '-0.9%',
    changePositive: false,
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    balance: '5,430 MATIC',
    price: '$0.89',
    change: '+0.6%',
    changePositive: true,
  },
];
