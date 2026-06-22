<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObjectiveVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionObjectiveVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionObjectiveVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)