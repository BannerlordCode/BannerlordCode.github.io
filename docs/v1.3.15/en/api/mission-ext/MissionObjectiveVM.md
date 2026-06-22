<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionObjectiveVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `ObjectiveGiverName` | `public string ObjectiveGiverName { get; set; }` |
| `HasObjectiveGiver` | `public bool HasObjectiveGiver { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasTitle` | `public bool HasTitle { get; set; }` |
| `HasDescription` | `public bool HasDescription { get; set; }` |
| `HasProgress` | `public bool HasProgress { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `RequiredProgress` | `public int RequiredProgress { get; set; }` |
| `ObjectiveGiverIdentifier` | `public CharacterImageIdentifierVM ObjectiveGiverIdentifier { get; set; }` |
| `Markers` | `public MissionObjectiveMarkersVM Markers { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### UpdateObjective

```csharp
public void UpdateObjective(MissionObjective objective)
```

### Tick

```csharp
public void Tick(float dt)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)