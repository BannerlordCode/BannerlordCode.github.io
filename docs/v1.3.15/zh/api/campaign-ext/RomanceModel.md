<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RomanceModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RomanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RomanceModel : MBGameModel<RomanceModel>`
**Base:** `MBGameModel<RomanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RomanceModel.cs`

## 概述

`RomanceModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<RomanceModel>(new MyRomanceModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetAttractionValuePercentage
```csharp
public abstract int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)
```

## 使用示例

```csharp
// RomanceModel (Model) 的典型用法
Game.Current.ReplaceModel<RomanceModel>(new MyRomanceModel());
```

## 参见

- [完整类目录](../catalog)