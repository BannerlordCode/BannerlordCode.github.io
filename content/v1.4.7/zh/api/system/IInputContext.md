---
title: "IInputContext"
description: "输入上下文契约，定义当前帧按键读数接口"
---
# IInputContext

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public interface`
**基类：** 无（接口）
**源文件：** `TaleWorlds.InputSystem/IInputContext.cs`（声明见第 8 行）

## 概述

`IInputContext` 是输入系统的核心契约之一，定义了「当前这一帧有哪些键被按住了」的读数接口。它抽象了输入查询的具体实现，使游戏逻辑可以统一地查询按键状态，而不关心底层是真实设备还是空实现。

这个接口是输入系统的「读取端」——游戏逻辑通过它获取输入状态，而不是直接操作输入设备。

## 心智模型

把它想象成一个「输入快照」：

- **它是一帧的快照**：`IInputContext` 回答的是「当前这一帧」的按键状态。每次查询都是针对当前帧的，不保留历史状态。
- **它是可替换的**：接口允许不同实现（真实输入、空输入、录制回放等）在运行期无缝切换。调用方代码完全感知不到差异。
- **它只读不写**：`IInputContext` 只提供查询方法，不提供修改方法。输入状态的更新由输入系统内部负责。

使用模式：

```
游戏逻辑 ──→ IInputContext 接口
                │
                ├── RealInputContext（真实设备读数）
                ├── EmptyInputContext（空实现，屏幕键盘激活时）
                └── 自定义实现（mod 开发者可注入）
```

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/IInputContext.cs:8`

```csharp
// 通过 InputManager 获取当前输入上下文
IInputContext context = Input.InputManager.InputContext;

// 或者通过 Input 静态类直接访问
IInputContext context = Input.InputContext;
```

### 典型用法

```csharp
// 场景 1：查询游戏键状态
public void HandleMovement()
{
    IInputContext context = Input.InputContext;
    
    if (context.IsGameKeyDown(GameKey.W))
    {
        MoveForward();
    }
    
    if (context.IsGameKeyDown(GameKey.A))
    {
        MoveLeft();
    }
}

// 场景 2：查询热键状态
public void HandleHotkeys()
{
    IInputContext context = Input.InputContext;
    
    if (context.IsHotKeyDown(HotKey.QuickSave))
    {
        SaveGame();
    }
    
    if (context.IsHotKeyPressed(HotKey.QuickLoad))
    {
        LoadGame();
    }
}

// 场景 3：查询指针位置
public void HandlePointer()
{
    IInputContext context = Input.InputContext;
    
    float x = context.GetPointerX();
    float y = context.GetPointerY();
    Vector2 pos = context.GetPointerPosition();
    
    UpdateCursorPosition(pos);
}

// 场景 4：查询轴向值（用于模拟输入）
public void HandleAxis()
{
    IInputContext context = Input.InputContext;
    
    float axis = context.GetGameKeyAxis(GameKey.MouseX);
    if (axis != 0f)
    {
        RotateCamera(axis);
    }
}
```

### 坑

- **它只回答当前帧**：`IsGameKeyDown` 等方法只反映当前帧的状态。如果你需要检测「按键刚刚按下」的瞬间，应该使用 `IsGameKeyPressed`（本帧按下）而非 `IsGameKeyDown`（按住状态）。
- **它不保证实现类的一致性**：不同的 `IInputContext` 实现可能有不同的行为。例如，`EmptyInputContext` 的所有方法都返回零值，而真实实现会返回实际设备状态。如果你的逻辑依赖特定的行为，需要确保当前上下文是你期望的实现。
- **它不触发事件**：`IInputContext` 只提供查询方法，不提供事件回调。如果你需要响应按键事件（如「按下时执行一次」），应该使用游戏的事件系统（如 `InputCallback`）而非轮询 `IInputContext`。
- **线程安全未保证**：`IInputContext` 的实现类通常不是线程安全的。如果你的 mod 在后台线程中查询输入状态，需要自行加锁或切回主线程。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetPointerX()` | 获取指针 X 坐标 |
| `GetPointerY()` | 获取指针 Y 坐标 |
| `GetPointerPosition()` | 获取指针位置（Vector2） |
| `IsGameKeyDown(GameKey)` | 游戏键是否按住 |
| `IsGameKeyDownImmediate(GameKey)` | 游戏键是否本帧按住（立即模式） |
| `IsGameKeyReleased(GameKey)` | 游戏键是否本帧释放 |
| `IsGameKeyPressed(GameKey)` | 游戏键是否本帧按下 |
| `GetGameKeyAxis(GameKey)` | 获取游戏键轴向值 |
| `IsHotKeyDown(HotKey)` | 热键是否按住 |
| `IsHotKeyReleased(HotKey)` | 热键是否本帧释放 |
| `IsHotKeyPressed(HotKey)` | 热键是否本帧按下 |
| `IsHotKeyDoublePressed(HotKey)` | 热键是否双击 |

## 真实示例

```csharp
// 来自 IInputContext.cs 的真实接口定义（第 20-29 行）
bool IsGameKeyDown(GameKey key);
bool IsGameKeyDownImmediate(GameKey key);
bool IsGameKeyReleased(GameKey key);
bool IsGameKeyPressed(GameKey key);

// 来自 IInputContext.cs 的真实接口定义（第 32 行）
float GetGameKeyAxis(GameKey key);
```

## 参见

- [EmptyInputContext](../EmptyInputContext)
- [IInputManager](../IInputManager)
- [../../sandbox/AgentNavigator](../../sandbox/AgentNavigator)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
