import { Button, Icon, Input, PlatformButton } from "@/components";
import { prisma } from "@/lib";

import styles from "./page.module.scss";

export default async function PlaygroundPage() {
  const classNames = {
    root: styles.root,
    header: styles.header,
    section: styles.section,
    subSection: styles.subSection,
    content: styles.content,
  };

  const placeholderIcon = <Icon iconName="link" fill={"var(--red)"} />;

  const platforms = await prisma?.platform.findMany();

  return (
    <div className={classNames.root}>
      <header className={classNames.header}>
        <h1>Playground</h1>
      </header>

      <section className={classNames.section}>
        <h2>Components</h2>
        <div className={classNames.subSection}>
          <h3>Buttons</h3>
          <div className={classNames.content}>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button>Button</Button>
              Default
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button active>Button</Button>
              Active
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button disabled>Button</Button>
              Disabled
            </div>
          </div>
        </div>
        <div className={classNames.subSection}>
          <h3>Input</h3>
          <div className={classNames.content}>
            <Input placeholder="Text Field Empty" icon={placeholderIcon} />
            <Input
              placeholder="Text Field Empty"
              icon={placeholderIcon}
              value="Text Field Filled"
            />
            <Input
              placeholder="Text Field Empty"
              icon={placeholderIcon}
              value="Text Field Active"
              active
            />
            <Input
              placeholder="Text Field Empty"
              icon={placeholderIcon}
              value="Text Field Error"
              hasError
              errorMessage="Please check again"
            />
          </div>
        </div>
        <div className={classNames.subSection}>
          <h3>List preview</h3>
          <div className={classNames.content}>
            {platforms?.map((platform) => {
              return (
                <PlatformButton
                  link={
                    {
                      url: "https://google.com",
                      platform: {
                        id: platform.id,
                        name: platform.name,
                        logoUrl: platform.identifier,
                        backgroundColor: platform.backgroundColor,
                        foregroundColor: platform.foregroundColor,
                      },
                    } as any
                  }
                  key={platform.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
