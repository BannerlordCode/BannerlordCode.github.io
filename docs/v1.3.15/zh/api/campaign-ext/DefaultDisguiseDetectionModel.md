<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDisguiseDetectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDisguiseDetectionModel : DisguiseDetectionModel`
**Base:** `DisguiseDetectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDisguiseDetectionModel.cs`

## 概述

`DefaultDisguiseDetectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateDisguiseDetectionProbability
```csharp
public override float CalculateDisguiseDetectionProbability(Settlement settlement)
```

## 使用示例

```csharp
// DefaultDisguiseDetectionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel());
```

## 参见

- [完整类目录](../catalog)