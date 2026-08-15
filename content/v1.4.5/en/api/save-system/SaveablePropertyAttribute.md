---
title: "SaveablePropertyAttribute"
description: "The attribute that adds an instance property to TaleWorlds.SaveSystem; LocalSaveId defines the property's persistence identity within its type."
---

# SaveablePropertyAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveablePropertyAttribute : Attribute`  
**Base:** `System.Attribute`  
**Source:** `TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## Overview

`SaveablePropertyAttribute(short localSaveId)` is the property route of save declaration. The save system reflects this Attribute, identifies the property by `LocalSaveId`, and then [SaveableTypeDefiner](../SaveableTypeDefiner/) registers the containing type. It answers "which property enters the object graph", not Behavior bucketing, type registration, or business Actions.

## Mental Model

The property version and [SaveableFieldAttribute](../SaveableFieldAttribute/) are two entry points in the same save system:

- `SaveableProperty` fits a member you want to read through a getter and write back through a setter at load.
- `SaveableField` fits implementation-detail fields.
- Both `LocalSaveId`s are a stable schema number within the owning type; do not reuse a number across fields/properties within the same type.
- The Attribute is only a member declaration. The containing class still must be put into the definition context by a `SaveableTypeDefiner`, and the type value must be serializable.

## When to Use / When Not to Use

Good for public read-only views, encapsulated state, or official-object-style properties, such as `TextObject.Attributes` in its `get; private set;` form. Not good for designing a setter that triggers a campaign Action, UI refresh, or event chain; writing a property at load time would fire those side effects at the wrong moment.

A Behavior's private state usually uses [IDataStore](../../campaign/IDataStore) rather than building a save-definition class just for a counter. Do not mark pure runtime caches or external handles.

## Members

```csharp
[AttributeUsage(AttributeTargets.Property)]
public class SaveablePropertyAttribute : Attribute
{
    public short LocalSaveId { get; set; }
    public SaveablePropertyAttribute(short localSaveId)
    {
        LocalSaveId = localSaveId;
    }
}
```

Source only allows it to mark `Property`. The getter must be able to obtain the value at save time, and the setter must let the save system back-fill at load; neither `get` nor `set` should depend on other objects that are not yet restored.

## Real Example: Property Member and Type Definition

```csharp
[Serializable]
public sealed class RelicInfo
{
    [SaveableProperty(1)]
    public TextObject Name { get; private set; }

    [SaveableProperty(2)]
    public Hero Owner { get; private set; }

    public RelicInfo(TextObject name, Hero owner)
    {
        Name = name;
        Owner = owner;
    }
}

public sealed class RelicSaveDefiner : SaveableTypeDefiner
{
    public RelicSaveDefiner() : base(910000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(RelicInfo), 1);
    }
}
```

This is an actually understandable save chain: `TextObject` and `Hero` must each already exist in the save-definition graph, and `RelicInfo` is then registered by the definer. The private setter is not a trick to bypass the save system; it lets the loader back-fill while still keeping the encapsulation boundary of ordinary runtime code.

The property members and the containing class are ultimately collected by the save system; the engine initializes the definition context when starting the save system (mods should not call these entries themselves to "register" properties):

```csharp
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missingTypes = SaveManager.CheckSaveableTypes();
```

## Risks and Save Protection

- **Duplicate `LocalSaveId`.** Fields and properties must each be unique within the same type; a duplicate number makes the definition or back-fill point at the wrong member.
- **Changing the number or type.** A released save treats the number and member type as schema; directly renumbering, changing `Hero` to a string, or deleting a property can make an old save fail to load. A new version should keep the old member or add a versioned member and write a compatible migration.
- **Setter side effects.** The loader calls the setter when back-filling a property; if the setter triggers an Action, event, or touches a not-yet-loaded `Campaign.Current` state, it can produce duplicate events, null references, or a half-initialized world. Make the setter only assign, and move derived work to an explicit post-load phase.
- **Unstable getter.** The value the getter returns at save time must be serializable and must not depend on temporary UI/engine state; do not mark a computed property as a save property.
- **Adding the Attribute alone is not enough.** Without `SaveableTypeDefiner.AddClassDefinition`, the `SaveManager` definition context has no containing type and the save returns a definition error.
- **Confusing it with `IDataStore`.** Property numbers are defined per type; Behavior keys are bucketed by string; do not fix a Behavior-key compatibility problem by changing `LocalSaveId`.

## Cross-Version Notes

1.3.15 and 1.4.5 have identical constructors, Attribute targets, and `LocalSaveId` type. `TextObject.Attributes` still uses `[SaveableProperty(2)]`, which shows the property route fits saving encapsulated data, but it does not mean any property can be safely added to the old-save schema.

## Dependencies

- Definition: [SaveableTypeDefiner](../SaveableTypeDefiner/) registers the containing class and type number.
- Execution: [SaveManager](../SaveManager/) builds the definition context and handles `Save`/`Load`.
- Comparison: [SaveableFieldAttribute](../SaveableFieldAttribute/) handles fields; [IDataStore](../../campaign/IDataStore) handles Behavior state.
- Typical values: [TextObject](../../localization/TextObject/) itself shows the combination of `SaveableField` and `SaveableProperty`.

## See Also

- Parent: [save-system API](./)
- Sibling: [SaveableFieldAttribute](../SaveableFieldAttribute/) · [SaveableTypeDefiner](../SaveableTypeDefiner/)
