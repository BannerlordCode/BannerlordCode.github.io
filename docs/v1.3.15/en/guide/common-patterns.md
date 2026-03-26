---
title: Common Patterns
description: Bannerlord modding best practices
---

# Common Patterns

**Namespace**: All TaleWorlds.*

## Overview

This guide covers best practices and common patterns for Bannerlord modding. Following these patterns makes your mods more stable and maintainable.

## Contents

1. [Code Organization](#code-organization)
2. [Performance Optimization](#performance-optimization)
3. [Compatibility](#compatibility)
4. [Debugging Tips](#debugging-tips)

---

## Code Organization

### Directory Structure

```
MyModule/
├── CSharpScripts/
│   ├── MySubModule.cs
│   ├── Missions/
│   │   ├── MyMissionLogic.cs
│   │   └── MyAgentHandler.cs
│   ├── Campaign/
│   │   ├── MyCampaignBehavior.cs
│   │   └── MyData.cs
│   └── UI/
│       ├── MyScreen.cs
│       └── MyViewModel.cs
├── ModuleData/
│   ├── lang/
│   │   ├── strings_en.txt
│   │   └── strings_zh.txt
│   ├── items.xml
│   └── characters.xml
└── SubModule.xml
```

### Namespaces

```csharp
namespace MyModule
{
    namespace Missions { }
    namespace Campaign { }
    namespace UI { }
    namespace Helpers { }
}
```

### Class Naming

| Type | Prefix | Example |
|------|--------|---------|
| SubModule | `My` | `MySubModule` |
| MissionBehavior | `MyMission` | `MyMissionLogic` |
| CampaignBehavior | `MyCampaign` | `MyCampaignBehavior` |
| Screen | `My` | `MyScreen` |
| ViewModel | `My` | `MyViewModel` |

---

## Performance Optimization

### Cache Common Objects

```csharp
// Avoid getting each frame
private Agent _cachedPlayerAgent;

public override void OnMissionStart()
{
    _cachedPlayerAgent = Mission.Current.PlayerTeam?.Leader;
}

public override void OnMissionTick(float dt)
{
    // Use cache instead of getting each frame
    if (_cachedPlayerAgent != null)
    {
        // ...
    }
}
```

### Avoid Per-Frame Allocation

```csharp
// Avoid
public override void OnMissionTick(float dt)
{
    var list = new List<string>();  // Allocated every frame!
}

// Recommended
private List<string> _reusableList = new List<string>();

public override void OnMissionTick(float dt)
{
    _reusableList.Clear();  // Reuse
}
```

### Use MBList Instead of List

```csharp
// TaleWorlds optimized list type
using TaleWorlds.Library;

// Use MBList instead of List
MBList<Agent> agents = new MBList<Agent>();
```

---

## Compatibility

### Check Game Version

```csharp
// Check game version
ApplicationVersion gameVersion = Game.Current.GameVersion;

if (gameVersion >= ApplicationVersion.FromString("e1.3.15"))
{
    // Use new API
}
else
{
    // Use old API
}
```

### Check Module Loaded

```csharp
// Check if module is loaded
if (ModuleManager.FindLoadedModules().Any(m => m.Id == "MyModule"))
{
    // Module is loaded
}
```

### Use try-catch for Compatibility

```csharp
try
{
    // Use new API
    SomeNewMethod();
}
catch (Exception)
{
    // Fallback to old implementation
    SomeOldMethod();
}
```

---

## Debugging Tips

### Use Debug.Print

```csharp
Debug.Print("Debug message", 0, Debug.DebugColor.Green, 17592186044416UL);
```

### Use InformationManager

```csharp
// Screen display
MBInformationManager.AddQuickInformation(
    new InformationMessage("Info text", Debug.Color.Blue)
);

// Popup window
InformationExtension.ShowPopup("Title", "Message");
```

### Check Logs

```
C:\Users\<username>\Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt
```

---

## Related Documentation

- [Debugging Tips](./index.md#debugging-tips)
- [API Reference](../api/)
- [Architecture Documentation](../architecture/)

---

## Next Section

- [Game Systems Overview](./game-systems-overview.md) - Learn what can be customized
- [Troubleshooting](./troubleshooting.md) - Solve problems
