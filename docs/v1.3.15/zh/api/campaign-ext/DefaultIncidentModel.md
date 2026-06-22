<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultIncidentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIncidentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs`

## 概述

`DefaultIncidentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMinGlobalCooldownTime
```csharp
public override CampaignTime GetMinGlobalCooldownTime()
```

### GetMaxGlobalCooldownTime
```csharp
public override CampaignTime GetMaxGlobalCooldownTime()
```

### GetIncidentTriggerGlobalProbability
```csharp
public override float GetIncidentTriggerGlobalProbability()
```

### GetIncidentTriggerProbabilityDuringSiege
```csharp
public override float GetIncidentTriggerProbabilityDuringSiege()
```

### GetIncidentTriggerProbabilityDuringWait
```csharp
public override float GetIncidentTriggerProbabilityDuringWait()
```

## 使用示例

```csharp
// DefaultIncidentModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel());
```

## 参见

- [完整类目录](../catalog)