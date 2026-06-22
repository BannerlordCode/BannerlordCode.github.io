<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IncidentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IncidentModel : MBGameModel<IncidentModel>`
**Base:** `MBGameModel<IncidentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IncidentModel.cs`

## 概述

`IncidentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<IncidentModel>(new MyIncidentModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMinGlobalCooldownTime
```csharp
public abstract CampaignTime GetMinGlobalCooldownTime()
```

### GetMaxGlobalCooldownTime
```csharp
public abstract CampaignTime GetMaxGlobalCooldownTime()
```

### GetIncidentTriggerGlobalProbability
```csharp
public abstract float GetIncidentTriggerGlobalProbability()
```

### GetIncidentTriggerProbabilityDuringSiege
```csharp
public abstract float GetIncidentTriggerProbabilityDuringSiege()
```

### GetIncidentTriggerProbabilityDuringWait
```csharp
public abstract float GetIncidentTriggerProbabilityDuringWait()
```

## 使用示例

```csharp
// IncidentModel (Model) 的典型用法
Game.Current.ReplaceModel<IncidentModel>(new MyIncidentModel());
```

## 参见

- [完整类目录](../catalog)