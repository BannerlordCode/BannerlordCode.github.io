---
title: "GameKey"
description: "表示一个可绑定的游戏按键，同时保存键盘与手柄两套键位及其默认值，并提供状态查询。"
---
# GameKey

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `class`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.InputSystem/GameKey.cs`（声明见第 6 行）

## 概述

`GameKey` 是输入系统里对「一个可绑定按键」的抽象。它同时保存键盘键与手柄键两套映射，并各自带一份默认值，因此既能表达玩家当前的绑定，也能在需要时一键还原默认。`GameKey` 本身不轮询硬件，它只是按键的「身份 + 默认值」载体；真正的按下/抬起状态由 `Input` 在帧循环里查询后写回，`GameKey` 上的 `IsDown` / `IsPressed` 等方法只是读取那份状态的便捷入口。

## 心智模型

把 `GameKey` 想成一张「键位档案卡」：`KeyboardKey` 和 `ControllerKey` 是当前生效的绑定，`DefaultKeyboardKey` 和 `DefaultControllerKey` 是出厂设置，`Id` / `StringId` 是档案编号，`GroupId` / `MainCategoryId` 决定它出现在设置界面的哪个分组里。状态查询方法（`IsDown`、`IsPressed` 等）不是自己去问硬件，而是问 `Input` 这一帧记下的快照——所以调用时机很重要：在帧更新之后调用才拿得到本帧的结果。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/GameKey.cs`（类声明见第 6 行）。`GameKey` 通常由输入管理器在初始化时集中创建并注册，一般不需要手动 `new`；需要遍历时从输入系统的键位注册表按 `StringId` 或 `Id` 查找。

### 典型用法

```csharp
GameKey attackKey = InputManager.FindKey("attack");
if (attackKey.IsDownImmediate())
{
    // 本帧攻击键被按住
}
```

### 坑

- `IsDown` 与 `IsDownImmediate` 语义不同：前者可能受输入消抖/帧合并影响，后者读的是即时快照，混用会导致手感不一致。
- `KeyboardKey` 与 `ControllerKey` 是两套独立绑定，只改一个不会同步另一个。
- 状态由 `Input` 在帧循环里刷新，在帧更新之前调用 `IsPressed` 拿到的是上一帧的结果。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Id` | 按键的唯一数值标识 |
| `StringId` | 按键的字符串标识，用于查找与序列化 |
| `GroupId` | 设置界面中的分组标识 |
| `MainCategoryId` | 主分类标识 |
| `KeyboardKey` | 当前键盘绑定 |
| `DefaultKeyboardKey` | 默认键盘绑定 |
| `ControllerKey` | 当前手柄绑定 |
| `DefaultControllerKey` | 默认手柄绑定 |
| `IsUp` | 查询是否处于抬起状态 |
| `IsDown` | 查询是否处于按下状态 |
| `IsDownImmediate` | 查询即时按下状态 |
| `IsPressed` | 查询本帧是否刚按下 |
| `IsReleased` | 查询本帧是否刚抬起 |
| `GetKeyState` | 获取底层键状态 |
| `ToString` | 返回按键的可读名称 |
| `Equals` | 比较两个按键是否相同 |
| `GetHashCode` | 返回哈希码 |

## 真实示例

```csharp
GameKey key = InputManager.FindKey("inventory");
bool held = key.IsDown();
bool justPressed = key.IsPressed();
string label = key.ToString();
```

## 参见

- [HotKey](../HotKey)
- [Key](../Key)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
