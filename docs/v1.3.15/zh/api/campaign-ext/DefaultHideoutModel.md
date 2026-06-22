<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHideoutModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`

## 概述

`DefaultHideoutModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public override CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime { get; }` |

## 主要方法

### GetRogueryXpGainOnHideoutMissionEnd
```csharp
public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)
```

## 使用示例

```csharp
// DefaultHideoutModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## 参见

- [完整类目录](../catalog)