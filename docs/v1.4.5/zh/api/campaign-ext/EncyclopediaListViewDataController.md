<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListViewDataController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListViewDataController

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaListViewDataController`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/EncyclopediaListViewDataController.cs`

## 概述

`EncyclopediaListViewDataController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `EncyclopediaListViewDataController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SaveListData
`public void SaveListData(EncyclopediaListVM list, string id)`

**用途 / Purpose:** 保存 `list data` 数据。

### LoadListData
`public void LoadListData(EncyclopediaListVM list)`

**用途 / Purpose:** 加载 `list data` 数据。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<EncyclopediaListViewDataController>();
```

## 参见

- [完整类目录](../catalog)