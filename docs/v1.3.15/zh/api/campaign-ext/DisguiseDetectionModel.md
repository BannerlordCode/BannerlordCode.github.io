<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisguiseDetectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DisguiseDetectionModel : MBGameModel<DisguiseDetectionModel>`
**Base:** `MBGameModel<DisguiseDetectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DisguiseDetectionModel.cs`

## 概述

`DisguiseDetectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DisguiseDetectionModel>(new MyDisguiseDetectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateDisguiseDetectionProbability
```csharp
public abstract float CalculateDisguiseDetectionProbability(Settlement settlement)
```

## 使用示例

```csharp
// DisguiseDetectionModel (Model) 的典型用法
Game.Current.ReplaceModel<DisguiseDetectionModel>(new MyDisguiseDetectionModel());
```

## 参见

- [完整类目录](../catalog)