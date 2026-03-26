---
title: Getting Started Guide
description: Quick start guide for Bannerlord v1.3.0 modding
---

# Getting Started Guide

Welcome to the Bannerlord v1.3.0 modding getting started guide. This guide covers the basics for v1.3.0.

::: warning Note
v1.3.0 is the version before v1.3.15. Some APIs may differ from the newer version. For new projects, it is recommended to use v1.3.15.
:::

## Table of Contents

1. [Environment Setup](#environment-setup)
2. [Project Structure](#project-structure)
3. [Your First SubModule](#your-first-submodule)
4. [Debugging Tips](#debugging-tips)
5. [Version Differences](#version-differences)

---

## Advanced Topics

> Note: v1.3.0 has some API differences from v1.3.15. Refer to [v1.3.15 Guide](../../v1.3.15/en/guide/) for more complete content.

6. [Mission System Basics](./mission-basics.md) - Mission, MissionBehavior introduction
7. [Campaign System Basics](./campaign-basics.md) - MobileParty, Kingdom introduction
8. [UI System Basics](./ui-basics.md) - GauntletMovie introduction
9. [Save System](./save-system.md) - v1.3.0 save implementation
10. [Common Issues](./common-issues.md) - Common errors and solutions

---

## Environment Setup

### System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| OS | Windows 10 | Windows 11 |
| RAM | 8GB | 16GB |
| Disk Space | 50GB free | 100GB SSD |
| .NET | .NET Framework 4.7.2 | .NET Framework 4.8 |

### Installation Steps

1. **Install Visual Studio 2019/2022**
   - Download [Visual Studio](https://visualstudio.microsoft.com/downloads/)
   - Select `.NET desktop development` workload

2. **Install TaleWorlds.Modding SDK**
   ```bash
   git clone https://github.com/BannerlordCoop/modding-sdk.git
   cd modding-sdk
   .\setup.bat
   ```

3. **Configure Game Path**
   - Open `Module Manager`
   - Set game installation path

### Verify Installation

Launch the game and confirm your module appears in the list.

---

## Project Structure

```
MyModule/
├── MyModule.dll
├── SubModule.xml
├── ModuleData/
│   └── lang/
│       └── strings.txt
├── Assets/
│   ├── meshes/
│   ├── textures/
│   └── sounds/
└── Guis/
    └── gauntlet/
```

### SubModule.xml Explained

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="MyModule"/>
  <Version value="1.0.0"/>
  <DefaultModule>
    <Xmls>
      <XmlNode path="ModuleData/my_config"/>
    </Xmls>
  </DefaultModule>
</Module>
```

---

## Your First SubModule

### Create Project

1. Create `Class Library (.NET Framework)` project in Visual Studio
2. Add NuGet packages:
   ```powershell
   Install-Package TaleWorlds.Core
   Install-Package TaleWorlds.MountAndBlade
   Install-Package TaleWorlds.Library
   ```

### Create SubModule Class

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
        }

        protected override void OnGameStartGame(Game game, GameStarter gameStarter)
        {
            base.OnGameStartGame(game, gameStarter);
        }
    }
}
```

### Register SubModule

```xml
<Module>
  <Dlls>
    <DllInfo>
      <AssemblyFile>MyModule.dll</AssemblyFile>
      <SubModuleClassType>MyModule.MySubModule</SubModuleClassType>
    </DllInfo>
  </Dlls>
</Module>
```

---

## Debugging Tips

### Breakpoint Debugging

1. Set breakpoints (F9) in Visual Studio
2. Press `F5` to start debugging

### Output Debug Information

```csharp
Debug.Print("Debug message");
MBInformationManager.AddQuickInformation(
    new InformationMessage("Info text")
);
```

### Log File Location

```
C:\Users\<username>\Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt
```

---

## Version Differences

### v1.3.0 vs v1.3.15 Key Differences

| Feature | v1.3.0 | v1.3.15 |
|---------|--------|---------|
| SaveSystem | Inline implementation | Separate TaleWorlds.SaveSystem |
| Async loading | Partial support | Full support |
| [Obsolete] markers | Fewer | More |

### Upgrade Recommendations

- For new projects, use v1.3.15
- Existing v1.3.0 projects can continue maintenance
- Check [API Reference](../../api/) before upgrading

---

## Next Steps

- View [Mission System Basics](./mission-basics.md) - Learn Mission and MissionBehavior
- View [Campaign System Basics](./campaign-basics.md) - Learn world map logic
- View [UI System Basics](./ui-basics.md) - Learn Gauntlet UI
- View [API Reference](../../api/) to learn available interfaces
- View [XML Reference](../../xml-reference/) to learn configuration formats
- View [Architecture](../../architecture/) to understand system design
- Recommended: Use [v1.3.15 Guide](../../v1.3.15/en/guide/) for more complete content

---

## FAQ

### Q: Module doesn't show in list?

Check:
1. `SubModule.xml` is in correct location
2. DLL is compiled
3. Class name matches XML

### Q: Which is better, v1.3.0 or v1.3.15?

| Feature | v1.3.0 | v1.3.15 |
|---------|--------|---------|
| SaveSystem | Inline implementation | Separate TaleWorlds.SaveSystem |
| Stability | Stable | Newer |
| Mod compatibility | Depends on mod | Depends on mod |

For new projects, v1.3.15 is recommended.

### Q: How to upgrade to v1.3.15?

1. Check v1.3.15 API changes
2. If using TaleWorlds.SaveSystem, need to re-implement
3. Test all functionality
