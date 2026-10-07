---
title: "Key"
description: "表示一个具体的输入键，区分键盘、鼠标按键、鼠标滚轮与手柄输入，并可在运行时改键。"
---
# Key

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `class`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.InputSystem/Key.cs`（声明见第 8 行）

## 概述

`Key` 是输入系统里对「一个具体物理输入」的抽象。它用一个 `InputKey` 枚举值表示到底是哪个键，并用一组布尔标志说明这个键属于键盘、鼠标按键、鼠标滚轮还是手柄。`Key` 是可序列化的，也是 `GameKey` / `HotKey` 内部保存绑定值的实际载体——`GameKey` 上的 `KeyboardKey` / `ControllerKey` 本质上就是 `Key`。

## 心智模型

把 `Key` 想成一张「输入标签」：`InputKey` 是标签上的名字（比如某个键盘码或鼠标键），`IsKeyboardInput` / `IsMouseButtonInput` / `IsMouseWheelInput` / `IsControllerInput` 是标签上的分类贴纸。`ChangeKey` 是「换标签」的动作——换完之后分类贴纸会重新贴，保证标志与新键一致。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/Key.cs`（类声明见第 8 行）。`Key` 通常由 `GameKey` / `HotKey` 在构造时创建，一般不直接手动 `new`；需要改绑定时通过 `GameKey` 上的 `KeyboardKey` / `ControllerKey` 属性拿到 `Key` 实例再调用 `ChangeKey`。

### 典型用法

```csharp
Key current = gameKey.KeyboardKey;
current.ChangeKey(newInputKey);
```

### 坑

- `ChangeKey` 会同时更新 `Is*Input` 系列标志，改完不要再手动维护这些标志。
- `Key` 是引用类型，`ChangeKey` 改的是实例本身；如果该 `Key` 被多个快捷键共享，改动会同时影响它们。
- `InputKey` 枚举覆盖键盘、鼠标与手柄，跨设备改键前最好先确认目标枚举值存在。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `IsKeyboardInput` | 是否为键盘输入 |
| `IsMouseButtonInput` | 是否为鼠标按键输入 |
| `IsMouseWheelInput` | 是否为鼠标滚轮输入 |
| `IsControllerInput` | 是否为手柄输入 |
| `InputKey` | 当前具体的输入键枚举值 |
| `ChangeKey` | 改变键位并同步更新 Is*Input 标志 |

## 真实示例

```csharp
Key key = gameKey.ControllerKey;
bool isPad = key.IsControllerInput;
key.ChangeKey(InputKey.Cross);
```

## 参见

- [GameKey](../GameKey)
- [HotKey](../HotKey)
- [../../sandbox/AgentNavigator](../../sandbox/AgentNavigator)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
