<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultRomanceModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRomanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRomanceModel : RomanceModel`
**Base:** `RomanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRomanceModel.cs`

## 概述

`DefaultRomanceModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetAttractionValuePercentage
```csharp
public override int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)
```

## 使用示例

```csharp
// DefaultRomanceModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel());
```

## 参见

- [完整类目录](../catalog)