# Save Attributes

**Namespace:** TaleWorlds.SaveSystem  
**Module:** TaleWorlds.SaveSystem

Attributes used to mark classes, properties, and fields as saveable in Bannerlord's save system.

## Overview

The save system uses .NET attributes to identify which types and members should be serialized. Three main attributes control what gets saved: `SaveableRootClassAttribute` marks the root of a save graph, while `SaveableFieldAttribute` and `SaveablePropertyAttribute` mark individual members.

## SaveableRootClassAttribute

Marks a class as a root saveable type. Only classes with this attribute can serve as the target of a save operation.

**Namespace:** TaleWorlds.SaveSystem  
**Attribute Usage:** `AttributeTargets.Class`

### Properties

| Name | Type | Description |
|------|------|-------------|
| SaveId | int | Unique identifier for this saveable type |

### Constructor

```csharp
public SaveableRootClassAttribute(int saveId)
```

**Parameters:**
- `saveId` - The unique save ID for this class

### Usage Example

```csharp
[SaveableRootClass(5000)]
public class MyCampaignData
{
    private int _gold;
    private string _playerName;
    
    [SaveableField(1)]
    private int Gold
    {
        get { return _gold; }
        set { _gold = value; }
    }
    
    [SaveableProperty(2)]
    public string PlayerName
    {
        get { return _playerName; }
        set { _playerName = value; }
    }
}
```

## SaveableFieldAttribute

Marks a field to be included in save data.

**Namespace:** TaleWorlds.SaveSystem  
**Attribute Usage:** `AttributeTargets.Field`

### Properties

| Name | Type | Description |
|------|------|-------------|
| LocalSaveId | short | Local identifier for this field within its parent class |

### Constructor

```csharp
public SaveableFieldAttribute(short localSaveId)
```

**Parameters:**
- `localSaveId` - The local save ID for this field

### Usage Example

```csharp
[SaveableRootClass(5001)]
public class MyCharacterData
{
    [SaveableField(1)]
    private int _health;
    
    [SaveableField(2)]
    private float _stamina;
    
    [SaveableField(3)]
    private List<string> _inventory;
}
```

## SaveablePropertyAttribute

Marks a property to be included in save data.

**Namespace:** TaleWorlds.SaveSystem  
**Attribute Usage:** `AttributeTargets.Property`

### Properties

| Name | Type | Description |
|------|------|-------------|
| LocalSaveId | short | Local identifier for this property within its parent class |

### Constructor

```csharp
public SaveablePropertyAttribute(short localSaveId)
```

**Parameters:**
- `localSaveId` - The local save ID for this property

### Usage Example

```csharp
[SaveableRootClass(5002)]
public class MyGameModeData
{
    private int _score;
    private DateTime _startTime;
    
    [SaveableProperty(1)]
    public int Score
    {
        get { return _score; }
        set { _score = value; }
    }
    
    [SaveableProperty(2)]
    public DateTime StartTime
    {
        get { return _startTime; }
        set { _startTime = value; }
    }
}
```

## Key Rules

1. **Root classes must be marked** - Only classes with `SaveableRootClassAttribute` can be saved as root objects
2. **Local IDs must be unique within a class** - Each field or property in a saveable class should have a unique `LocalSaveId`
3. **Nested saveable objects** - If a field/property type is itself a `SaveableRootClass`, it will be saved recursively
4. **Collections are supported** - Types like `List<T>`, `Dictionary<TKey, TValue>`, `Array` are handled automatically if properly registered

## ID Allocation Guidelines

| Range | Purpose |
|-------|---------|
| 1-9999 | Reserved for game use |
| 5000-5999 | Commonly used for custom mod saveable types |
| 10000+ | Available for mod use |

## See Also

- [SaveManager](./SaveManager.md)
- [SaveContext](./SaveContext.md)
- [LoadContext](./LoadContext.md)
