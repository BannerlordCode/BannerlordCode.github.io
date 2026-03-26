---
title: Getting Started Guide
description: Quick start guide for Bannerlord modding
---

# Getting Started Guide

Welcome to the Bannerlord modding getting started guide. This guide will help you set up your development environment, create your first SubModule, and master debugging techniques.

## Table of Contents

1. [Environment Setup](#environment-setup)
2. [Project Structure](#project-structure)
3. [Your First SubModule](#your-first-submodule)
4. [Debugging Tips](#debugging-tips)
5. [FAQ](#faq)

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

1. **Install Visual Studio 2022**
   - Download [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/)
   - Select `.NET desktop development` workload during installation

2. **Install TaleWorlds.Modding SDK**
   ```bash
   # Clone SDK repository
   git clone https://github.com/BannerlordCoop/modding-sdk.git
   
   # Open solution
   cd modding-sdk
   .\setup.bat
   ```

3. **Configure Game Path**
   - Open `Module Manager` in Visual Studio
   - Set `Mount & Blade II Bannerlord` installation path
   - Default: `C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord`

### Verify Installation

Launch the game, select `Modules` from main menu, and confirm your module appears in the list.

---

## Project Structure

Standard Bannerlord module project structure:

```
MyModule/
├── MyModule.dll              # Compiled module file
├── SubModule.xml             # Module configuration ⭐Important
├── ModuleData/
│   └── lang/                 # Language files
│       └── strings.txt
├── Assets/                   # Asset files
│   ├── meshes/              # Model files
│   ├── textures/            # Texture files
│   └── sounds/             # Sound files
├── Guis/                    # UI files
│   └── gauntlet/
└── CSharpScripts/            # C# scripts (if used)
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

**Key Elements:**
- `<Name>` - Module display name
- `<Version>` - Module version
- `<Xmls>` - XML configurations to load

---

## Your First SubModule

### Create Project

1. Create new `Class Library (.NET Framework)` project in Visual Studio
2. Add these NuGet packages:
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
    // ⭐ Key: Inherit from MBSubModuleBase
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            
            // Called when module loads
            // Use for initializing resources, registering events, etc.
        }

        protected override void OnGameStartGame(Game game, GameStarter gameStarter)
        {
            base.OnGameStartGame(game, gameStarter);
            
            // Called when game starts
            // Add behaviors, initialize game logic, etc.
        }
    }
}
```

### Register SubModule

Edit `SubModule.xml`:

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

### Common API Examples

```csharp
// Get game instance
Game game = Game.Current;

// Create new item
ItemObject newItem = ItemObject.CreateItem("my_item");

// Add to game world
game.ItemRoster.Add(newItem);

// Listen to events
game.GameStarted += OnGameStarted;

// Output debug info
InformationMessage message = new InformationMessage("Hello from MyModule!");
MBInformationManager.AddQuickInformation(message);
```

---

## Debugging Tips

### Breakpoint Debugging

1. Open game solution in Visual Studio
2. Set breakpoints (F9) on target code
3. Press `F5` to start debugging
4. Game will pause at breakpoints

### Output Debug Information

```csharp
// Method 1: Use Debug.Print
Debug.Print("Debug message here", Debug.Color.White);

// Method 2: Use InformationManager
MBInformationManager.AddQuickInformation(
    new InformationMessage("Info text", Debug.Color.Blue)
);

// Method 3: Write to log file
File.WriteAllText("debug_log.txt", "content");
```

### Common Debugging Scenarios

| Scenario | Method |
|----------|--------|
| Module not loading | Check `SubModule.xml` path and class name |
| XML parse error | Validate XML syntax |
| Game crash | Check `rgl_log.txt` |
| Missing assets | Verify asset paths and case-sensitivity |

### Log File Location

```
C:\Users\<username>\Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt
```

### Module Manager Debugging

Press `F12` in game to open Module Manager, where you can:
- View all loaded modules
- Check module dependencies
- Diagnose loading failures

---

## FAQ

### Q: Module doesn't show in list?

Check:
1. `SubModule.xml` is in correct location
2. DLL is compiled
3. Class name matches XML
4. Required dependency modules are present

### Q: Game throws error on startup?

Check `rgl_log.txt` for detailed error info. Common causes:
- XML syntax error
- Missing asset files
- Missing DLL dependencies

### Q: How to publish module?

1. Ensure `SubModule.xml` version is correct
2. Zip entire module folder
3. Upload to Mod forum or Steam Workshop

### Q: Does it support multiplayer?

Bannerlord natively supports multiplayer. You need:
- Implement `MPEventReceiver` in `MultiplayerModule`
- Synchronize necessary data

---

## Next Steps

- View [API Reference](../api/) to learn available interfaces
- View [XML Reference](../xml-reference/) to learn configuration formats
- View [Architecture](../architecture/) to understand system design

## Related Links

- [Bannerlord Modding Discord](https://discord.gg/bannerloard)
- [Official Modding Forum](https://forums.taleworlds.com/)
- [Modding Wiki](https://docs.bannerlordmodding.com/)
