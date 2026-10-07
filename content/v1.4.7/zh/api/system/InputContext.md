---
title: "InputContext"
description: "输入上下文实现，把物理输入事件（键鼠、手柄）翻译成逻辑按键状态，是每帧轮询输入的核心入口。"
---
# InputContext

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public class`
**基类：** `IInputContext`（接口）
**源文件：** `TaleWorlds.InputSystem/InputContext.cs`（声明见第 9 行）

## 概述

`InputContext` 是 `IInputContext` 接口的具体实现，负责把底层的物理输入事件（键盘、鼠标、手柄）翻译成高层的逻辑按键状态。它内部持有一组 `GameKeyContext` 实例，并在每帧被 `Input` 类驱动时，把当前帧的输入快照写入这些上下文中的按键对象。

对 mod 开发者来说，`InputContext` 是「我现在能不能收到输入」的守门人：它通过 `IsKeysAllowed`、`IsMouseButtonAllowed`、`IsMouseWheelAllowed`、`IsControllerAllowed` 等开关，决定当前帧哪些输入通道是激活的。这在 UI 打开时屏蔽游戏输入、或只在特定场景响应手柄时非常关键。

## 心智模型

把 `InputContext` 想象成一个「输入调度台」：

- 它不直接产生输入，而是**接收**底层 `Input` 类采集的原始状态；
- 它把原始状态**分发**到各个 `GameKeyContext` 中对应的按键对象上；
- 外部代码（如 `Mission` 中的行为树、`AgentNavigator` 中的导航逻辑）通过查询按键对象的状态来感知输入。

关键设计点：**允许开关优先于状态查询**。即使物理按键被按下，如果 `IsKeysAllowed` 为 `false`，查询接口也会返回「未按下」。这让 UI 层可以可靠地屏蔽游戏输入，而不需要逐个检查焦点状态。

## 怎么用

### 怎么拿到

源树路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.InputSystem/InputContext.cs`

- 类声明：`InputContext.cs:9` — `public class InputContext : IInputContext`
- 构造函数：`InputContext.cs:42` — 初始化 `_categories`、`_registeredGameKeys`、`_registeredHotKeys`、`_registeredGameAxisKeys`、`_downInputKeys`

`InputContext` 通常由 `Input` 类在内部创建和管理，mod 开发者一般通过 `Input.GetInputContext()` 或类似入口获取当前活跃的上下文实例。

### 典型用法

```csharp
// 1. 检查输入通道是否激活
IInputContext ctx = Input.GetInputContext();
if (ctx.IsKeysAllowed && ctx.IsGameKeyDown(MyGameKeyId))
{
    // 响应键盘输入
}

// 2. 查询鼠标位置
float x = ctx.GetPointerX();
float y = ctx.GetPointerY();

// 3. 检查手柄
if (ctx.IsControllerAllowed && ctx.IsGameButtonDown(GameButtonId.LeftThumb))
{
    // 响应手柄摇杆
}
```

### 坑

- **允许开关会屏蔽状态**：`IsKeysAllowed` 为 `false` 时，`IsGameKeyDown` 一律返回 `false`，即使物理按键确实被按下。这是设计意图，不是 bug。
- **每帧必须查询**：输入状态是帧快照，跨帧缓存 `IsDown` 结果会导致逻辑错误。
- **鼠标位置是归一化的**：`GetPointerX/Y` 返回的是 0–1 范围的归一化坐标，不是像素值。
- **手柄与键鼠是独立通道**：`IsControllerAllowed` 与 `IsKeysAllowed` 互不影响，需要分别检查。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `IsKeysAllowed` (14) | 键盘输入通道是否激活 |
| `IsMouseButtonAllowed` (19) | 鼠标按键通道是否激活 |
| `IsMouseWheelAllowed` (24) | 鼠标滚轮通道是否激活 |
| `IsControllerAllowed` (28) | 手柄输入通道是否激活 |
| `MouseOnMe` (39) | 鼠标是否悬停在本上下文关联的 UI 上 |
| `GetPointerX` / `GetPointerY` | 获取归一化鼠标位置 |
| `IsGameKeyDown` | 查询游戏键是否按下 |
| `IsGameButtonDown` | 查询手柄按钮是否按下 |

## 真实示例

```csharp
// 来自 InputContext.cs 的接口实现
public bool IsKeysAllowed { get; }
public bool IsMouseButtonAllowed { get; }
public bool IsMouseWheelAllowed { get; }
public bool IsControllerAllowed { get; }
public bool MouseOnMe { get; }

// 查询接口
public bool IsGameKeyDown(int id)
public float GetPointerX()
public float GetPointerY()
```

## 参见

- [GameKeyContext](../GameKeyContext)
- [HotKeyManager](../HotKeyManager)
- [../../mission/Mission](../../mission/Mission)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
