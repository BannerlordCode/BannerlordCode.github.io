<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuRecruitVolunteersView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MenuRecruitVolunteersView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuRecruitVolunteersView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuRecruitVolunteersView.cs`

## 概述

`MenuRecruitVolunteersView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MenuRecruitVolunteersView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var view = new MenuRecruitVolunteersView();
```

## 参见

- [完整类目录](../catalog)