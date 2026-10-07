---
title: "IInputManager"
description: "输入管理器契约，定义输入设备状态查询接口"
---
# IInputManager

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public interface`
**基类：** 无（接口）
**源文件：** `TaleWorlds.InputSystem/IInputManager.cs`（声明见第 7 行）

## 概述

`IInputManager` 是输入系统的另一个核心契约，定义了「输入设备状态查询」的接口。与 `IInputContext`（按键读数）不同，`IInputManager` 关注的是设备层面的状态：鼠标位置、控制器类型、剪贴板内容、陀螺仪数据等。

这个接口是输入系统的「管理层」——它管理输入设备的整体状态，而 `IInputContext` 管理的是具体的按键读数。

## 心智模型

把它想象成一个「设备管理器」：

- **它是设备状态的查询入口**：`IInputManager` 回答的是「当前有哪些设备、它们的状态如何」，而不是「当前帧哪些键被按住了」。
- **它是全局的**：与 `IInputContext` 可以有多帧快照不同，`IInputManager` 通常是一个全局单例，代表当前系统的输入设备状态。
- **它是可扩展的**：接口允许不同实现（真实设备、空实现、虚拟设备等）在运行期无缝切换。

使用模式：

```
游戏逻辑 ──→ IInputManager 接口
                │
                ├── Input.InputManager（真实设备管理）
                ├── EmptyInputManager（空实现，屏幕键盘激活时）
                └── 自定义实现（mod 开发者可注入）
```

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/IInputManager.cs:7`

```csharp
// 通过 Input 静态类获取输入管理器
IInputManager manager = Input.InputManager;

// 或者通过 InputManager 属性
IInputManager manager = Input.InputManager;
```

### 典型用法

```csharp
// 场景 1：查询鼠标位置
public void HandleMouse()
{
    IInputManager manager = Input.InputManager;
    
    float mouseX = manager.GetMousePositionX();
    float mouseY = manager.GetMousePositionY();
    
    UpdateCursorPosition(mouseX, mouseY);
}

// 场景 2：查询控制器状态
public void HandleController()
{
    IInputManager manager = Input.InputManager;
    
    ControllerTypes type = manager.GetControllerType();
    bool connected = manager.IsControllerConnected();
    
    if (connected && type == ControllerTypes.Xbox)
    {
        ShowXboxUI();
    }
}

// 场景 3：查询剪贴板
public void HandleClipboard()
{
    IInputManager manager = Input.InputManager;
    
    string text = manager.GetClipboardText();
    if (!string.IsNullOrEmpty(text))
    {
        ProcessClipboardText(text);
    }
}

// 场景 4：查询陀螺仪（用于体感控制）
public void HandleGyro()
{
    IInputManager manager = Input.InputManager;
    
    float gyroX = manager.GetGyroX();
    float gyroY = manager.GetGyroY();
    float gyroZ = manager.GetGyroZ();
    
    ApplyGyroRotation(gyroX, gyroY, gyroZ);
}

// 场景 5：查询触摸状态
public void HandleTouch()
{
    IInputManager manager = Input.InputManager;
    
    if (manager.IsAnyTouchActive())
    {
        HandleTouchInput();
    }
}
```

### 坑

- **它与 IInputContext 的分工不同**：`IInputManager` 管理设备状态（鼠标位置、控制器类型等），`IInputContext` 管理按键读数（哪些键被按住了）。如果你需要查询按键状态，应该使用 `IInputContext`；如果你需要查询设备状态，应该使用 `IInputManager`。
- **它不保证实现类的一致性**：不同的 `IInputManager` 实现可能有不同的行为。例如，`EmptyInputManager` 的所有方法都返回零值，而真实实现会返回实际设备状态。如果你的逻辑依赖特定的行为，需要确保当前管理器是你期望的实现。
- **它不触发事件**：`IInputManager` 只提供查询方法，不提供事件回调。如果你需要响应设备状态变化（如「控制器连接时执行一次」），应该使用游戏的事件系统或轮询检测状态变化。
- **线程安全未保证**：`IInputManager` 的实现类通常不是线程安全的。如果你的 mod 在后台线程中查询设备状态，需要自行加锁或切回主线程。
- **GetMousePositionX/Y 与 GetPointerX/Y 的区别**：`GetMousePositionX/Y` 返回的是鼠标在屏幕上的绝对位置，而 `GetPointerX/Y` 返回的是指针（可能是鼠标、触摸、控制器等）的位置。在大多数情况下它们相同，但在触摸或控制器输入时可能不同。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetMousePositionX()` | 获取鼠标 X 坐标 |
| `GetMousePositionY()` | 获取鼠标 Y 坐标 |
| `GetMouseScrollValue()` | 获取鼠标滚轮值 |
| `GetControllerType()` | 获取控制器类型 |
| `IsMouseActive()` | 鼠标是否激活 |
| `IsControllerConnected()` | 控制器是否连接 |
| `IsAnyTouchActive()` | 是否有触摸输入激活 |
| `ClearKeys()` | 清空按键状态 |
| `GetClickKeys()` | 获取点击键列表 |
| `GetClipboardText()` | 获取剪贴板文本 |
| `GetDesktopResolution()` | 获取桌面分辨率 |
| `GetGyroX()` | 获取陀螺仪 X 轴 |
| `GetGyroY()` | 获取陀螺仪 Y 轴 |
| `GetGyroZ()` | 获取陀螺仪 Z 轴 |
| `GetKeyState()` | 获取按键状态 |
| `GetMouseDeltaZ()` | 获取鼠标滚轮增量 |
| `GetMouseMoveX()` | 获取鼠标 X 轴移动量 |
| `GetMouseMoveY()` | 获取鼠标 Y 轴移动量 |

## 真实示例

```csharp
// 来自 IInputManager.cs 的真实接口定义（第 10-16 行）
float GetMousePositionX();
float GetMousePositionY();
float GetMouseScrollValue();

// 来自 IInputManager.cs 的真实接口定义（第 19-25 行）
ControllerTypes GetControllerType();
bool IsMouseActive();
bool IsControllerConnected();
```

## 参见

- [IInputContext](../IInputContext)
- [EmptyInputManager](../EmptyInputManager)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
