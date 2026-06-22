<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaViewModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaViewModel

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaViewModel : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaViewModel.cs`

## 概述

`EncyclopediaViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 Gauntlet UI 之间的数据绑定桥梁。用 `[DataSourceProperty]` 绑定属性，重写 OnPropertyChanged 响应变化。

## 主要属性

| Name | Signature |
|------|-----------|
| `PageTargetType` | `public Type PageTargetType { get; }` |

## 使用示例

```csharp
// EncyclopediaViewModel (ViewModel) 的典型用法
// 绑定一个 EncyclopediaViewModel 到 Gauntlet UI
var vm = new EncyclopediaViewModel();
movie.SetViewModel(vm);;
```

## 参见

- [完整类目录](../catalog)