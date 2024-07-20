"use client";
import IconButton from "@/components/elements/IconButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
	const { push } = useRouter();

	const onClickLogo = () => {
		push("/");
	};

	const onClickMenu = () => {};

	return (
		<section className='flex flex-row items-center gap-3'>
			<IconButton
				onClickIcon={onClickMenu}
				icon={<RxHamburgerMenu size={24} />}
			/>
			<div
				className='cursor-pointer'
				onClick={onClickLogo}
			>
				<Image
					alt='logo'
					width={100}
					height={30}
					src={"/main-logo.svg"}
				/>
			</div>
		</section>
	);
};

export default Logo;