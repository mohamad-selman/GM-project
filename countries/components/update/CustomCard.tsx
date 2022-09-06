import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

interface Props {
	children: JSX.Element | JSX.Element[];
	img?: string | null;
	alt?: string;
	action?: JSX.Element;
}
export const CustomCard = ({ children, img, alt, action }: Props) => {
	return (
		<Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
			{img && <CardMedia component="img" height="170px" image={img} alt={alt + ' flag'} />}
			<CardContent>{children}</CardContent>
			{action && <CardActions sx={{ justifyContent: 'center' }}>{action}</CardActions>}
		</Card>
	);
};
