---
title: "GameKeyContext"
description: "按键上下文基类，负责注册和查询游戏键、热键与轴键，是输入系统按类别管理按键的核心抽象。"
---
# GameKeyContext

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public abstract class`
**基类：** `object`（无显式基类）
**源文件：** `bannerlord-1.4.7/TaleWorlds.InputSystem/GameKeyContext.cs`（声明见第 8 行）

## 概述

`GameKeyContext` 是输入系统中「按键上下文」的抽象基类。它把一组相关的按键（游戏键 GameKey、热键 HotKey、轴键 GameAxisKey）组织在一个具名类别下，并提供统一的注册与查询接口。`HotKeyManager` 通过维护多个 `GameKeyContext` 实例来实现按类别的键位管理；`InputContext` 则在其内部持有一组上下文实例，把物理输入事件翻译成逻辑按键状态。

每个上下文都有一个字符串 ID（`GameKeyCategoryId`）和一个类型标记（`Type`，取值为内部枚举 `GameKeyContextType`），用来区分普通游戏键类别与热键类别。

## 心智模型

把 `GameKeyContext` 想象成一个「按键登记表」：

- 每个上下文是一本独立的登记表，只登记自己那一类按键（例如「移动类」「战斗类」「界面类」）。
- 登记分两种：**热键**（`RegisterHotKey`，可被玩家自定义改键）和**游戏键**（`RegisterGameKey`，固定语义按键）。
- 登记之后，外部通过 `GetHotKey` / `GetGameKey` / `GetGameAxisKey` 用 ID 反查按键对象，再读取其当前状态。
- 因为它是 `abstract`，具体类别（如 `DefaultGameKeyContext`）继承它并在构造时把按键「登记」进来。

关键设计点：**注册与查询分离**。注册发生在上下文构造阶段（一次性），查询发生在每帧输入轮询阶段（高频）。这种分离让输入系统能在 O(1) 时间内按 ID 命中按键。

## 怎么用

### 怎么拿到

源树路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.InputSystem/GameKeyContext.cs`

- 类声明：`GameKeyContext.cs:8` — `public abstract class GameKeyContext`
- 构造函数：`GameKeyContext.cs:51` — `protected GameKeyContext(string id, int gameKeysCount, GameKeyContext.GameKeyContextType type = ...)`
- 内部枚举：`GameKeyContext.cs` 中的 `GameKeyContextType`

通常不直接 `new` 一个 `GameKeyContext`（它是抽象的），而是：

1. 继承它，在构造函数里调用 `RegisterHotKey` / `RegisterGameKey` 登记按键；
2. 通过 `HotKeyManager.GetCategory(name)` 拿到已注册的上下文实例；
3. 通过 `InputContext` 间接访问其按键状态。

### 典型用法

```csharp
// 1. 定义一个具体上下文（继承基类）
public class MyModKeyContext : GameKeyContext
{
    public MyModKeyContext() : base("MyMod", 16, GameKeyContextType.GameKey) { }

    public void Register()
    {
        RegisterGameKey(0, "MyMod_Action", "My Mod Action", "MyMod");
        RegisterHotKey(1, "MyMod_Trigger", "My Mod Trigger", "MyMod");
    }
}

// 2. 查询按键
GameKeyContext ctx = HotKeyManager.GetCategory("MyMod");
GameKey action = ctx.GetGameKey(0);
bool down = action.IsDown;
```

### 坑

- **抽象类不能直接实例化**：必须继承并实现构造逻辑，否则编译报错。
- **ID 必须唯一**：`GameKeyCategoryId` 是上下文的唯一标识，重复 ID 会导致 `HotKeyManager` 内部字典冲突。
- **注册顺序即索引**：`RegisterGameKey(id, ...)` 的第一个参数是逻辑 ID，后续查询必须用同一个 ID，不要用数组下标臆测。
- **热键与游戏键是两套表**：`RegisteredHotKeys` 和 `RegisteredGameKeys` 分开存储，`GetHotKey` 查不到游戏键，反之亦然。
- **轴键是第三套**：`RegisterGameAxisKey` 用于连续量输入（如摇杆），与离散按键的查询方式不同。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GameKeyCategoryId` (13) | 上下文的唯一字符串标识，用于在 HotKeyManager 中查找 |
| `Type` (18) | 上下文类型标记（`GameKeyContextType` 枚举） |
| `RegisteredGameKeys` (22) | 已注册的游戏键集合 |
| `RegisteredHotKeys` (32) | 已注册的热键集合（可被玩家改键） |
| `RegisteredGameAxisKeys` (42) | 已注册的轴键集合（连续量输入） |
| `RegisterHotKey` (65) | 注册一个热键 |
| `RegisterGameKey` (94) | 注册一个游戏键 |
| `RegisterGameAxisKey` (112) | 注册一个轴键 |
| `GetHotKey` (132) | 按 ID 获取热键对象 |
| `GetGameKey` (140) | 按 ID 获取游戏键对象 |
| `GetGameAxisKey` (170) | 按 ID 获取轴键对象 |
| `GetHotKeyId` (178/195) | 按类别获取热键 ID（两个重载） |

## 真实示例

```csharp
// 来自 GameKeyContext.cs 的注册方法签名
public void RegisterHotKey(int id, string name, string description, string category)
public void RegisterGameKey(int id, string name, string description, string category)
public void RegisterGameAxisKey(int id, string name, string description, string category)

// 查询方法签名
public GameKey GetGameKey(int id)
public GameKey GetHotKey(int id)
public GameKey GetGameAxisKey(int id)
```

## 参见

- [InputContext](../InputContext)
- [HotKeyManager](../HotKeyManager)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
