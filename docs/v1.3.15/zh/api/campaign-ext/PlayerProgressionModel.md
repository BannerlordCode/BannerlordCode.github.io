<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerProgressionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PlayerProgressionModel : MBGameModel<PlayerProgressionModel>`
**Base:** `MBGameModel<PlayerProgressionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PlayerProgressionModel.cs`

## 概述

`PlayerProgressionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PlayerProgressionModel>(new MyPlayerProgressionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPlayerProgress
```csharp
public abstract float GetPlayerProgress()
```

## 使用示例

```csharp
// PlayerProgressionModel (Model) 的典型用法
Game.Current.ReplaceModel<PlayerProgressionModel>(new MyPlayerProgressionModel());
```

## 参见

- [完整类目录](../catalog)