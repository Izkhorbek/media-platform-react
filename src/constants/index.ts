// Navbar Items *****************************************/

import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import ElectricalIcon from '@mui/icons-material/ElectricalServices';
import BuildIcon from '@mui/icons-material/Build';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ComputerIcon from '@mui/icons-material/Computer';
import FactoryIcon from '@mui/icons-material/Factory';
import DeckIcon from '@mui/icons-material/Deck';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { type SvgIconComponent } from '@mui/icons-material';
import type { ICardComponentProps } from '@/interface/ICardComponentProps';

export interface INavbarItem {
      id: string | number;
      name: string;
      label: string;
      icon: SvgIconComponent;
      href: string;
      // If true, the category is active and should be displayed
      isActive?: boolean; // Optional property to indicate if the category is active (default is true)
}

export const categories: INavbarItem[] = [
      {
            id: 'home-appliances',
            name: 'home-appliances',
            label: 'Maishiy texnika',
            isActive: true,
            icon: HomeIcon,
            href: '/category/home-appliances',
      },
      {
            id: 'smart-devices',
            name: 'smart-devices',
            label: 'Aqlli qurilmalar',
            icon: DevicesIcon,
            isActive: true,
            href: '/category/smart-devices',
      },
      {
            id: 'electrical',
            name: 'electrical',
            label: 'Elektr jihozlari',
            isActive: true,
            icon: ElectricalIcon,
            href: '/category/electrical',
      },
      {
            id: 'industrial',
            name: 'industrial',
            label: 'Sanoat texnikalari',
            isActive: true,
            icon: BuildIcon,
            href: '/category/industrial',
      },
      {
            id: 'agriculture',
            name: 'agriculture',
            label: 'Qishloq xo‘jaligi texnikalari',
            icon: AgricultureIcon,
            isActive: true,
            href: '/category/agriculture',
      },
      {
            id: 'computers',
            name: 'computers',
            label: 'Kompyuter va periferiklar',
            icon: ComputerIcon,
            isActive: false,
            href: '/category/computers',
      },
      {
            id: 'factory',
            name: 'factory',
            label: 'Zavod va fabrika texnikalari',
            isActive: true,
            icon: FactoryIcon,
            href: '/category/factory',
      },
      {
            id: 'furniture',
            name: 'furniture',
            label: 'Mebellar',
            isActive: true,
            icon: DeckIcon,
            href: '/category/furniture',
      },
      {
            id: 'metallurgy',
            name: 'metallurgy',
            label: 'Metallurgiya',
            isActive: true,
            icon: MiscellaneousServicesIcon,
            href: '/category/metallurgy',
      },
];

interface ICardComponentPropsWithId extends ICardComponentProps {
      id: number;
}
export const exampleData: ICardComponentPropsWithId[] = [
      {
            id: 1,
            title: 'Smart TV',
            description: '55-inch 4K UHD Smart TV with HDR',
            imageUrl: '/images/tv.jpg',
            price: 3500,
            quantity: 1,
      },
      {
            id: 2,
            title: 'Laptop',
            description: '15-inch laptop with Intel i7 processor',
            imageUrl: '/images/laptop.jpg',
            price: 5000,
            quantity: 1,
      },
      {
            id: 3,
            title: 'Refrigerator',
            description: 'Double door refrigerator, 300L',
            imageUrl: '/images/fridge.jpg',
            price: 2500,
            quantity: 1,
      },
      {
            id: 4,
            title: 'Washing Machine',
            description: 'Front load washing machine, 7kg',
            imageUrl: '/images/washing-machine.jpg',
            price: 1800,
            quantity: 1,
      },
      {
            id: 5,
            title: 'Microwave Oven',
            description: 'Convection microwave oven, 25L',
            imageUrl: '/images/microwave.jpg',
            price: 700,
            quantity: 1,
      },
      {
            id: 6,
            title: 'Smartphone',
            description: 'Latest Android smartphone, 128GB',
            imageUrl: '/images/smartphone.jpg',
            price: 1200,
            quantity: 1,
      },
      {
            id: 7,
            title: 'Tablet',
            description: '10-inch tablet, 64GB storage',
            imageUrl: '/images/tablet.jpg',
            quantity: 1,
            price: 900,
      },
      {
            id: 8,
            title: 'Air Conditioner',
            description: '1.5 Ton split AC, inverter technology',
            imageUrl: '/images/ac.jpg',
            quantity: 1,
            price: 2200,
      },
      {
            id: 9,
            title: 'Vacuum Cleaner',
            description: 'Bagless vacuum cleaner, 2000W',
            imageUrl: '/images/vacuum.jpg',
            quantity: 1,
            price: 600,
      },
      {
            id: 10,
            title: 'Smart Watch',
            description: 'Fitness tracking smart watch',
            imageUrl: '/images/smartwatch.jpg',
            quantity: 1,
            price: 400,
      },
      {
            id: 11,
            title: 'Industrial Drill',
            description: 'Heavy-duty industrial drill machine',
            imageUrl: '/images/drill.jpg',
            quantity: 1,
            price: 3200,
      },
      {
            id: 12,
            title: 'Tractor',
            description: 'Agricultural tractor, 50HP',
            imageUrl: '/images/tractor.jpg',
            quantity: 1,
            price: 15000,
      },
      {
            id: 13,
            title: 'Desktop PC',
            description: 'Gaming desktop with RTX 3060',
            imageUrl: '/images/desktop.jpg',
            quantity: 1,
            price: 7000,
      },
      {
            id: 14,
            title: 'Factory Conveyor',
            description: 'Automated conveyor belt system',
            imageUrl: '/images/conveyor.jpg',
            quantity: 1,
            price: 12000,
      },
      {
            id: 15,
            title: 'Office Chair',
            description: 'Ergonomic office chair with lumbar support',
            imageUrl: '/images/chair.jpg',
            quantity: 1,
            price: 350,
      },
      {
            id: 16,
            title: 'Steel Furnace',
            description: 'Industrial steel melting furnace',
            imageUrl: '/images/furnace.jpg',
            quantity: 1,
            price: 25000,
      },
      {
            id: 17,
            title: 'Rice Harvester',
            description: 'Automatic rice harvesting machine',
            imageUrl: '/images/harvester.jpg',
            quantity: 1,
            price: 18000,
      },
      {
            id: 18,
            title: '3D Printer',
            description: 'Desktop 3D printer, PLA/ABS compatible',
            imageUrl: '/images/3dprinter.jpg',
            quantity: 1,
            price: 2000,
      },
      {
            id: 19,
            title: 'Solar Panel',
            description: '400W monocrystalline solar panel',
            imageUrl: '/images/solar.jpg',
            quantity: 1,
            price: 800,
      },
      {
            id: 20,
            title: 'Smart Light',
            description: 'WiFi-enabled smart LED bulb',
            imageUrl: '/images/smartlight.jpg',
            quantity: 1,
            price: 100,
      },
];
