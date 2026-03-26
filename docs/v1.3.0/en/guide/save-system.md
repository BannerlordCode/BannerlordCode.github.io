---
title: Save System
description: v1.3.0 save implementation
---

# Save System

**v1.3.0 Version**

## Overview

v1.3.0 uses `IDataStore` interface for saving, without a separate TaleWorlds.SaveSystem module.

## IDataStore Usage

### Basic Structure

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    private int _myValue = 0;
    
    public override void SyncData(IDataStore dataStore)
    {
        // Sync data
        dataStore.SyncData("MyValue", ref _myValue);
    }
}
```

### Supported Types

| Type | Supported |
|------|-----------|
| int, float, string, bool | ✓ |
| Arrays | ✓ |
| List | ✓ |
| Dictionary | ✓ |
| Custom classes | Manual implementation |

### Example

```csharp
public class MyData
{
    public int Score;
    public string PlayerName;
    public List<Item> Items;
}

public class MyBehavior : CampaignBehaviorBase
{
    private MyData _data = new MyData();
    
    public override void SyncData(IDataStore dataStore)
    {
        // Sync simple data
        dataStore.SyncData("Score", ref _data.Score);
        dataStore.SyncData("PlayerName", ref _data.PlayerName);
        
        // Sync lists
        if (dataStore.IsLoading)
        {
            _data.Items = new List<Item>();
        }
        dataStore.SyncData("Items", ref _data.Items);
    }
}
```

## Differences from v1.3.15

| Feature | v1.3.0 | v1.3.15 |
|---------|--------|---------|
| Save interface | IDataStore | TaleWorlds.SaveSystem |
| Attribute marking | None | [SaveableClass] |
| Type safety | Manual | Automatic |
| Container support | Basic | Complete |

---

## Related Documentation

- [v1.3.15 Save System](../../v1.3.15/en/guide/save-system-guide.md)
