<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestTaskBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestTaskBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `QuestTaskBase` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsLogged` | `public bool IsLogged { get; }` |
| `IsActive` | `public bool IsActive { get; }` |


## Key Methods

### Finish

```csharp
public void Finish(QuestTaskBase.FinishStates finishState)
```

### AddTaskDialogs

```csharp
public void AddTaskDialogs()
```

### SetReferences

```csharp
public virtual void SetReferences()
```

### AddTaskDialogOnGameLoaded

```csharp
public void AddTaskDialogOnGameLoaded(DialogFlow dialogFlow)
```

### AddTaskBehaviorsOnGameLoad

```csharp
public void AddTaskBehaviorsOnGameLoad(Action onSucceededAction = null, Action onFailedAction = null, Action onCanceledAction = null)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)