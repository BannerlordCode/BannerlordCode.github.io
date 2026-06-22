<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**Base:** `MBGameModel<HideoutModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs`

## 概述

`HideoutModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<HideoutModel>(new MyHideoutModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime { get; }` |

## 主要方法

### GetRogueryXpGainOnHideoutMissionEnd
```csharp
public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)
```

## 使用示例

```csharp
// HideoutModel (Model) 的典型用法
Game.Current.ReplaceModel<HideoutModel>(new MyHideoutModel());
```

## 参见

- [完整类目录](../catalog)