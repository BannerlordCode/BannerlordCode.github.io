<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OverrideEncyclopediaModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OverrideEncyclopediaModel

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OverrideEncyclopediaModel : EncyclopediaModelBase`
**Base:** `EncyclopediaModelBase`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/OverrideEncyclopediaModel.cs`

## 概述

`OverrideEncyclopediaModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<OverrideEncyclopediaModel>(new MyOverrideEncyclopediaModel())` 注册，以改变其计算逻辑。

## 使用示例

```csharp
// OverrideEncyclopediaModel (Model) 的典型用法
Game.Current.ReplaceModel<OverrideEncyclopediaModel>(new MyOverrideEncyclopediaModel());
```

## 参见

- [完整类目录](../catalog)