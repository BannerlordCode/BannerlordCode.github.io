<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputContext`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputContext

**命名空间:** TaleWorlds.InputSystem  
**模块:** TaleWorlds.InputSystem  
**类型:** class（实现 `IInputContext`）  
**文件:** `bannerlord-1.3.15/TaleWorlds.InputSystem/InputContext.cs`

`InputContext` 是 mod 读取键鼠/手柄输入的入口——查询按键的按下/刚按/刚松、鼠标移动量与滚轮、手柄摇杆等。每个任务（`Mission`）有自己的 `InputContext`。

## 概述

mod 在 `MissionBehavior` 中通过 `Mission.Current.InputContext` 获取当前输入上下文，然后查询自定义热键（`GameKeyContext`）或原始 `InputKey`。注册自定义按键类别用 `RegisterHotKeyCategory`，随后用 `IsGameKeyDown/Pressed/Released(gameKey)`（gameKey 为整数 ID）或 `IsHotKeyDown/Pressed/Released(hotKeyName)` 查询。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| IsKeysAllowed | bool | 是否允许键盘输入（get/set） |
| IsMouseButtonAllowed | bool | 是否允许鼠标按键（get/set） |
| IsMouseWheelAllowed | bool | 是否允许滚轮（get/set） |
| IsControllerAllowed | bool | 是否允许手柄（仅 get） |
| MouseOnMe | bool | 鼠标是否在当前 UI 上（get/set） |

## 主要方法

### 热键 / 游戏键

```csharp
public void RegisterHotKeyCategory(GameKeyContext category)
public bool IsCategoryRegistered(GameKeyContext category)

public bool IsGameKeyDown(int gameKey)
public bool IsGameKeyDownImmediate(int gameKey)
public bool IsGameKeyPressed(int gameKey)
public bool IsGameKeyReleased(int gameKey)
public float GetGameKeyState(int gameKey)
public float GetGameKeyAxis(GameAxisKey gameKey)
public float GetGameKeyAxis(string gameKey)

public bool IsHotKeyDown(string hotKey)
public bool IsHotKeyPressed(string hotKey)
public bool IsHotKeyReleased(string hotKey)
public bool IsHotKeyDoublePressed(string hotKey)
```

### 原始按键 / 鼠标 / 手柄

```csharp
public bool IsKeyDown(InputKey key)
public bool IsKeyPressed(InputKey key)
public bool IsKeyReleased(InputKey key)
public Vec2 GetKeyState(InputKey key)

public int GetPointerX();
public int GetPointerY();
public Vec2 GetPointerPositionVec2();

public float GetMouseMoveX();
public float GetMouseMoveY();
public float GetNormalizedMouseMoveX();
public float GetNormalizedMouseMoveY();
public float GetDeltaMouseScroll();
public Vec2 GetMousePositionPixel();
public Vec2 GetMousePositionRanged();
public bool GetIsMouseActive();
public bool GetIsMouseDown();
public float GetMouseSensitivity();

public Vec2 GetControllerRightStickState();
public Vec2 GetControllerLeftStickState();
public bool GetIsControllerConnected();

public bool IsControlDown();
public bool IsShiftDown();
public bool IsAltDown();
public InputKey[] GetClickKeys();
```

`IsGameKeyDown` 表示当前按住；`IsGameKeyPressed` 表示本帧刚按下（边沿触发）。`Immediate` 变体不经过边沿缓冲。

## 使用示例

```csharp
// 在 MissionBehavior 中读取自定义按键
public class MyMissionBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnMissionBehaviourUpdate(float dt)
    {
        InputContext input = Mission.Current.InputContext;

        // 自定义热键（需先在某处 RegisterHotKeyCategory）
        if (input.IsGameKeyPressed(MyKeys.ToggleMenu))  // MyKeys.ToggleMenu 为 int ID
        {
            // 切换菜单
        }

        // 原始按键
        if (input.IsKeyDown(InputKey.LeftMouseButton))
        {
            // 鼠标左键按住中
        }

        // 修饰键
        if (input.IsControlDown() && input.IsKeyPressed(InputKey.K))
        {
            // Ctrl+K
        }
    }
}
```

## 参见

- [Mission](../mission/Mission.md)
- [GameEntity](../engine/GameEntity.md)
- [MBCommon](./MBCommon.md)
