<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPlayerProgressionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPlayerProgressionModel : PlayerProgressionModel`
**Base:** `PlayerProgressionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPlayerProgressionModel.cs`

## 概述

`DefaultPlayerProgressionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPlayerProgress
```csharp
public override float GetPlayerProgress()
```

## 使用示例

```csharp
// DefaultPlayerProgressionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel());
```

## 参见

- [完整类目录](../catalog)