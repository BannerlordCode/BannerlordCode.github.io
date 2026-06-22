<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**Base:** `MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`

## 概述

`AgeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<AgeModel>(new MyAgeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public abstract int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public abstract int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge { get; }` |
| `BecomeOldAge` | `public abstract int BecomeOldAge { get; }` |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge { get; }` |
| `MaxAge` | `public abstract int MaxAge { get; }` |

## 主要方法

### GetAgeLimitForLocation
```csharp
public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
```

## 使用示例

```csharp
// AgeModel (Model) 的典型用法
Game.Current.ReplaceModel<AgeModel>(new MyAgeModel());
```

## 参见

- [完整类目录](../catalog)