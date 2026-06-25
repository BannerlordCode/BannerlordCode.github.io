---
title: "BannerViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerViewModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.BannerEditor/BannerViewModel.cs`

## 概述

`BannerViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `BannerViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |

## 使用示例

```csharp
var vm = new BannerViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)