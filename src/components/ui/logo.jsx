import Image from "next/image"

export function Logo({ className }) {
    return (
        <div>
            <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="logo"
                className={`${className}`}
            />
        </div>
    )
}


export function NavLogo({ logoClassName, src, width , height  }) {
    return (
        <div>
            <Image
                src={src}
                width={width}
                height={height}
                alt="logo"
                className={`${logoClassName}`}
            />
        </div>
    )
}

