<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GamepadCursorViewModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GamepadCursorViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs`

## 概述

`GamepadCursorViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `GamepadCursorViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsConsoleMouseVisible` | `public bool IsConsoleMouseVisible { get; set; }` |
| `IsGamepadCursorVisible` | `public bool IsGamepadCursorVisible { get; set; }` |
| `CursorPositionX` | `public float CursorPositionX { get; set; }` |
| `CursorPositionY` | `public float CursorPositionY { get; set; }` |

## 使用示例

```csharp
var vm = new GamepadCursorViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)