---
title: Save System Guide
description: Complete guide to v1.3.15's new SaveSystem
---

# Save System Guide

**Namespace**: TaleWorlds.SaveSystem
**Version**: 1.3.15 (NEW - does not exist in 1.3.0)

## Overview

TaleWorlds.SaveSystem is a new save system introduced in v1.3.15. In v1.3.0, save logic was scattered across modules, but v1.3.15 unified it into a dedicated system.

## Contents

1. [Core Concepts](#core-concepts)
2. [Creating Saveable Classes](#creating-saveable-classes)
3. [SaveManager Usage](#savemanager-usage)
4. [Common Issues](#common-issues)
5. [Related API](#related-api)

---

## Core Concepts

### Save Attributes

| Attribute | Description |
|-----------|-------------|
| `[SaveableRootClass(id)]` | Mark as save root class |
| `[SaveableClass(id)]` | Mark as saveable class |
| `[SaveableField(id)]` | Mark saveable field |
| `[SaveableProperty(id)]` | Mark saveable property |

### Basic Types

```csharp
// Simple types (auto-supported)
[SaveableField(1)] public int IntValue;
[SaveableField(2)] public float FloatValue;
[SaveableField(3)] public string StringValue;
[SaveableField(4)] public bool BoolValue;

// Arrays and containers
[SaveableField(5)] public int[] IntArray;
[SaveableField(6)] public List<string> StringList;
[SaveableField(7)] public Dictionary<string, int> StringIntDict;
```

---

## Creating Saveable Classes

### Simple Example

```csharp
using TaleWorlds.SaveSystem;

namespace MyModule
{
    // Mark as saveable class, ID is 1
    [SaveableClass(1)]
    public class MyData
    {
        // Mark saveable field
        [SaveableField(1)]
        public int Score;
        
        [SaveableField(2)]
        public string PlayerName;
        
        [SaveableField(3)]
        public List<Item> Inventory;
    }
}
```

### Nested Classes

```csharp
[SaveableClass(2)]
public class Item
{
    [SaveableField(1)]
    public string Name;
    
    [SaveableField(2)]
    public int Quantity;
}

[SaveableClass(1)]
public class MyData
{
    [SaveableField(1)]
    public Item EquippedItem;
    
    [SaveableField(2)]
    public List<Item> Inventory;
}
```

### Root Class

```csharp
// Save root classes need unique type ID
[SaveableRootClass(5000)]
public class MyModData
{
    [SaveableField(1)]
    public MyData GameData;
    
    [SaveableField(2)]
    public int Version;
}
```

---

## SaveManager Usage

### Save Game

```csharp
using TaleWorlds.SaveSystem;

// Create data
MyModData data = new MyModData
{
    GameData = new MyData { Score = 100, PlayerName = "Hero" },
    Version = 1
};

// Create metadata
MetaData metaData = new MetaData
{
    SaveName = "MySave",
    GameVersion = ApplicationVersion.FromParametersFile(null),
    CreationTime = DateTime.Now
};

// Save using SaveDriver
ISaveDriver driver = new AsyncFileSaveDriver();
SaveOutput result = SaveManager.Save(data, metaData, "MySave", driver);

if (result.Succeeded)
{
    Debug.Print("Save successful!");
}
```

### Load Game

```csharp
// Load using SaveDriver
ISaveDriver driver = new AsyncFileSaveDriver();
LoadResult loadResult = SaveManager.Load("MySave", driver);

if (loadResult.Succeeded)
{
    MyModData data = loadResult.RootObject as MyModData;
    Debug.Print($"Loaded: {data.GameData.PlayerName}");
}
```

### Custom SaveDriver

```csharp
public class MySaveDriver : ISaveDriver
{
    public Task<SaveResultWithMessage> Save(string saveName, int version, 
        MetaData metaData, GameData gameData)
    {
        // Custom save logic
        byte[] bytes = SerializeGameData(gameData);
        File.WriteAllBytes(saveName + ".mysave", bytes);
        return Task.FromResult(new SaveResultWithMessage(true, ""));
    }
    
    public LoadData Load(string saveName)
    {
        // Custom load logic
        byte[] bytes = File.ReadAllBytes(saveName + ".mysave");
        return DeserializeGameData(bytes);
    }
}
```

---

## Common Issues

### Q: Why isn't my data being saved?

Check:
1. Does the class have `[SaveableClass]` or `[SaveableRootClass]` attribute?
2. Do fields have `[SaveableField]` or `[SaveableProperty]` attribute?
3. Are type IDs unique (no conflicts)?

### Q: Data is lost after save?

Common causes:
1. **Circular references**: `A` references `B`, `B` also references `A`
2. **Unregistered types**: Need to register custom types first
3. **Version incompatibility**: Need to handle migration when save format changes

### Q: How to handle version migration?

```csharp
[SaveableClass(1)]
public class MyData
{
    [SaveableField(1)]
    public int OldField;  // Old version field
    
    [SaveableField(2)]
    public int NewField;  // New version field
    
    // Migration logic
    public void MigrateFrom(object oldData)
    {
        if (oldData is OldMyData old)
        {
            NewField = old.OldField * 10;  // Data conversion
        }
    }
}
```

### Q: Are v1.3.0 and v1.3.15 saves compatible?

No. v1.3.15 uses a completely new TaleWorlds.SaveSystem and requires re-implementing save logic.

---

## Related API

- [SaveManager API](../api/save-system/SaveManager.md)
- [SaveAttributes API](../api/save-system/SaveAttributes.md)
- [AutoGeneratedSaveManager API](../api/save-system/AutoGeneratedSaveManager.md)
- [Save System Detail](../architecture/save-system.md)

---

## Next Section

- [Common Patterns](./common-patterns.md) - Bannerlord modding best practices
- [Campaign System](./campaign-system.md) - Learn about the Campaign world
