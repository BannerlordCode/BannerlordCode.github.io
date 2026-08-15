---
title: "SaveablePropertyAttribute"
description: "The Attribute that adds an instance property to TaleWorlds.SaveSystem; LocalSaveId is the property's persistent identity within its type."
---
# SaveablePropertyAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveablePropertyAttribute : Attribute`  
**Base:** `System.Attribute`  
**Source:** `TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## Overview

`SaveablePropertyAttribute(short localSaveId)` declares a property for the save route. The save system reflects the Attribute, identifies the property by `LocalSaveId`, and relies on [SaveableTypeDefiner](../SaveableTypeDefiner/) to register the containing type. It answers “which property is in the object graph,” not behavior bucketing, type registration, or business mutation.

## Mental Model

The property Attribute and [SaveableFieldAttribute](../SaveableFieldAttribute/) are two entry points into the same save definition system:

- `SaveableProperty` suits a value exposed through a getter and restored through a setter.
- `SaveableField` suits implementation-detail state.
- Both `LocalSaveId` values are stable schema numbers within the containing type; do not reuse one across fields and properties.
- The Attribute is only a member declaration. The containing class still needs a `SaveableTypeDefiner`, and its values must be serializable.

## When to use / when not to use

Use it for an encapsulated value or official-style read-only view, such as the `get; private set;` shape used by `TextObject.Attributes`. Do not make a setter a campaign Action, UI refresh, or event-chain entry point: load-time assignment can happen before those systems are ready.

Behavior-private state normally belongs in [IDataStore](../../campaign-ext/IDataStore/), not in a new save definition for a single counter. Do not mark runtime caches or external engine handles.

## Member shape

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

The source targets only `Property`. A getter must provide a value during saving, and a setter must allow restoration during loading; neither should assume that every related object has already loaded.

## Real example: property members and a type definition

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

```csharp
// The save manager discovers the definer (via its base ID) and builds the definition context that includes RelicInfo
SaveManager.InitializeGlobalDefinitionContext();
```

This is one complete save chain: `TextObject` and `Hero` must already be present in the save definition graph, and the definer registers `RelicInfo`. A private setter is an encapsulation boundary, not a way around the save system; it lets the loader restore the value while normal runtime callers still cannot assign it.

## Risks and crash boundaries

- **Duplicate `LocalSaveId`.** Fields and properties within one type must be unique; reuse can define or restore the wrong member.
- **Changing ID or type.** Published saves treat the number and member type as schema. Renumbering, changing `Hero` to a string, or removing the property can make old saves fail. Add a versioned member and migration path instead.
- **Setter side effects.** The loader calls the setter. If it triggers an Action, event, or access to half-restored `Campaign.Current`, it can duplicate effects or fail with null/partial state. Keep setters assignment-only and do derived work in a deliberate post-load phase.
- **Unstable getters.** The getter's value must be serializable and independent of transient UI or engine state; do not mark a calculated property as saveable.
- **Attribute without a definer.** Without `AddClassDefinition`, the containing type is absent from `SaveManager`'s definition context and saving can return a definition error.
- **Confusing routes.** Property IDs belong to type definitions; behavior keys belong to string buckets. Do not change `LocalSaveId` to fix an `IDataStore` key compatibility problem.

## Cross-version notes

The constructor, Attribute target, and `LocalSaveId` type are the same in 1.3.15 and 1.4.5. `TextObject.Attributes` still uses `[SaveableProperty(2)]`, demonstrating the encapsulated-property route; it does not mean that every property can be added to an existing schema safely.

## Dependencies

- Definition: [SaveableTypeDefiner](../SaveableTypeDefiner/) registers the containing class and type ID.
- Execution: [SaveManager](../SaveManager/) builds the definition context and performs `Save`/`Load`.
- Contrast: [SaveableFieldAttribute](../SaveableFieldAttribute/) handles fields; [IDataStore](../../campaign-ext/IDataStore/) handles behavior state.
- Example value: [TextObject](../../localization/TextObject/) demonstrates both field and property save members.

- Parent: [save-system API](./)
- Siblings: [SaveableFieldAttribute](../SaveableFieldAttribute/) · [SaveableTypeDefiner](../SaveableTypeDefiner/)
