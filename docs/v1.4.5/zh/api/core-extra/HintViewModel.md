<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HintViewModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HintViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/HintViewModel.cs`

## 概述

`HintViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `HintViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** 通知 UI 开始显示当前提示，常在鼠标悬停或控件聚焦时触发。

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 通知 UI 结束当前提示显示，常在鼠标移开或控件失焦时触发。

## 使用示例

```csharp
var vm = new HintViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)
