---
title: "HintViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HintViewModel`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HintViewModel

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core
**类型:** `public class HintViewModel : ViewModel`

## 概述

`HintViewModel` 是 UI 提示（hint / tooltip）层的轻量 ViewModel。它的职责很明确：把一段可本地化的提示文本以及相关显隐状态暴露给 Gauntlet 绑定层，让界面在悬停或聚焦时显示正确提示。

## 心智模型

把 `HintViewModel` 当作“单一提示气泡的数据源”来看：界面层负责决定什么时候显示提示，而这个 ViewModel 负责携带提示内容、更新绑定状态，并通过 `ViewModel` 的通知机制把变化推给界面。

## 主要属性

### HintText
`public TextObject HintText { get; set; }`

**用途 / Purpose:** 保存当前提示文本，通常由调用方在创建 ViewModel 时传入。

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 当语言切换或 UI 需要重新拉取本地化文本时，刷新绑定值。

## 使用示例

```csharp
HintViewModel hint = new HintViewModel();
hint.HintText = new TextObject("{=my_mod_hint}This action consumes 10 stamina.");
hint.RefreshValues();
```

## 参见

- [ViewModel](./ViewModel)
- [DataSourceProperty](./DataSourceProperty)
