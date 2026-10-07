---
title: "BarberState"
description: "理发界面（创意菜单）的 GameState 载荷：只装两样东西——被编辑的 BasicCharacterObject 和限制发型 / 胡须选项的 IFaceGeneratorCustomFilter。全树无内部构造方，属于 UI 层订阅消费的 GameState。"
---

# BarberState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarberState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BarberState.cs`

## 概述

`BarberState` 是**创意菜单（理发界面）的 GameState 载荷**，22 行源码里只有两个数据成员：

```csharp
public BasicCharacterObject Character;
public IFaceGeneratorCustomFilter Filter { get; private set; }
```

它继承 [GameState](../../core-extra/GameState)，而 `GameState` 是整条 UI 栈的基类：有一个静态栈管理器 [GameStateManager](../../core-extra/GameStateManager) 负责创建、入栈、逐帧 tick 和出栈。`BarberState` 的职责因此非常窄——**它不画任何东西、不处理任何输入、不持有屏幕对象**，它只是在界面被推入栈时，把「这次要编辑谁」和「哪些发型 / 胡须选项允许出现」这两个参数递给订阅它的 view model 与 screen。

在体系里它承担的是**「界面上下文传递」**这一环。与它同族的 [CraftingState](../CraftingState)、[InventoryState](../InventoryState)、[PartyState](../PartyState)、[MapState](../MapState) 都是同一模式：GameState 是数据信封，Gauntlet 层的 ViewModel 监听 `GameStateManager` 的激活事件后从中读参数。

有一个必须说清楚的事实：**1.4.5 的 CampaignSystem 源码树里没有任何地方 `new BarberState(...)` 或 `CreateState<BarberState>()`**。它是给 ViewModel / 外层界面代码预留的扩展点，而不是战役逻辑的一部分。

## 心智模型

把它当成**「一次界面会话的参数信封」**就对了。

- **两步式：构造 → Push。** 官方 `Helpers` 里所有 `GameState` 的用法都是这个形状，例如 `InventoryScreenHelper.cs:190` 的 `InventoryState inventoryState = Game.Current.GameStateManager.CreateState<InventoryState>();` 之后立刻 `PushState`。`BarberState` 同理。
- **`Character` 是字段，`Filter` 是属性。** 这个不一致是源码原样。`Character` 是 `public` 字段，可以随手改；`Filter` 只有 `private set`，只能在构造时定。**要换编辑对象只能改字段，要换过滤规则必须重建 state。**
- **两个构造器，其中一个是空的。** `public BarberState()` 什么都不做——于是 `Character` 是 null、`Filter` 是 null。`GameStateManager.CreateState<BarberState>()`（无参重载）走的正是这条路。**用无参版构造出来的 state 必须在推栈前手工赋 `Character`。**
- **`IsMenuState => true` 意味着它把音乐菜单状态让出来。** 这是 `GameState` 的一个跨层开关：菜单型 state 通常让菜单音乐继续播。改它会直接影响音频。
- **`Filter` 的来源在 `Helpers`。** [CharacterHelper](../../system/CharacterHelper) 的 `GetFaceGeneratorFilter()`（`CharacterHelper.cs:105-107`）返回 `Campaign.Current.GetCampaignBehavior<IFacegenCampaignBehavior>()?.GetFaceGenFilter()`——**没有注册这个行为时返回 null**。传 null 的 `Filter` 表示「不做任何限制」，而不是崩。
- **不要缓存 `BarberState`。** `GameState.HandleFinalize()`（`TaleWorlds.Core/GameState.cs:89-98`）会把 `_listeners` 置 null、`GameStateManager` 置 null。出栈之后这个对象就是死的。

### `Filter` 接口的实际职责

`IFaceGeneratorCustomFilter`（定义在 `TaleWorlds.Core`，三个成员）：

| 成员 | 回答什么 |
| --- | --- | 
| `int[] GetHaircutIndices(BasicCharacterObject character)` | 这个角色可选哪些发型下标 |
| `int[] GetFacialHairIndices(BasicCharacterObject character)` | 可选哪些胡须下标 |
| `FaceGeneratorStage[] GetAvailableStages()` | 创意菜单开放哪几个阶段（脸 / 头发 / 胡须 …） |

返回 `null` 通常表示「不限」；具体语义由实现者与 ViewModel 约定。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character;` | **public 字段，不是属性。** 被编辑的角色。**无参构造器之后它就是 null**，必须赋值。它的类型是 `BasicCharacterObject`（`TaleWorlds.Core` 的基础角色数据），不是 `Hero` 也不是 `CharacterObject`——因为创意菜单要在英雄成年之前也能编辑。 |
| `Filter` | `public IFaceGeneratorCustomFilter Filter { get; private set; }` | 限制发型 / 胡须 / 阶段选项的过滤器。**`private set` 意味着推栈之后改不了**，要换只能在构造时传入。来源通常是 `CharacterHelper.GetFaceGeneratorFilter()`，未注册对应 CampaignBehavior 时为 null。 |
| `IsMenuState` | `public override bool IsMenuState => true` | 覆写自 [GameState](../../core-extra/GameState)。为 true 表示这是一个菜单型 state，菜单音乐可以继续播放。**它没有副作用代码，但改这个值会直接改变界面音频行为。** |
| `BarberState()` | `public BarberState()` | 空构造器。`Character` 与 `Filter` 都留 null。`GameStateManager.CreateState<BarberState>()` 的无参重载走这条路。 |
| `BarberState(BasicCharacterObject, IFaceGeneratorCustomFilter)` | `public BarberState(BasicCharacterObject character, IFaceGeneratorCustomFilter filter)` | 正常构造器，同时写入两个成员。**通过 `GameStateManager.CreateState<T>(params object[])` 传参时走的就是它**（内部是 `Activator.CreateInstance(typeof(T), parameters)`）。 |

## 真实示例

按官方 `Helpers` 的形状创建一个理发 state 并推入栈（对照 `InventoryScreenHelper.cs:190` 的写法）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;
using Helpers;

public static void OpenBarber(BasicCharacterObject target)
{
    if (Game.Current == null || target == null)
    {
        return;
    }

    IFaceGeneratorCustomFilter filter = CharacterHelper.GetFaceGeneratorFilter();
    BarberState state = Game.Current.GameStateManager.CreateState<BarberState>(target, filter);
    Game.Current.GameStateManager.PushState(state);
}
```

走无参构造器时，必须在推栈之前手工填 `Character`（`Filter` 没有 setter，只能留 null 表示「不限制」）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static void OpenBarberUnfiltered(BasicCharacterObject target)
{
    if (Game.Current == null || target == null)
    {
        return;
    }

    BarberState state = Game.Current.GameStateManager.CreateState<BarberState>();
    state.Character = target;
    Game.Current.GameStateManager.PushState(state);
}
```

自己实现一个过滤器，只允许某几种发型（三个成员全部要实现）：

```csharp
using TaleWorlds.Core;

public class ModHairFilter : IFaceGeneratorCustomFilter
{
    private static readonly int[] AllowedHaircuts = new int[] { 0, 1, 2 };

    public int[] GetHaircutIndices(BasicCharacterObject character)
    {
        return AllowedHaircuts;
    }

    public int[] GetFacialHairIndices(BasicCharacterObject character)
    {
        return new int[] { 0 };
    }

    public FaceGeneratorStage[] GetAvailableStages()
    {
        return new FaceGeneratorStage[] { FaceGeneratorStage.Face, FaceGeneratorStage.Hair };
    }
}
```

在 session 期间读取当前 state（`GameStateManager.LastOrDefault<T>()` 找到栈里最近的那个 `BarberState`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static string DescribeActiveBarber()
{
    if (Game.Current == null)
    {
        return "";
    }

    BarberState active = Game.Current.GameStateManager.LastOrDefault<BarberState>();
    if (active == null || active.Character == null)
    {
        return "no barber session";
    }

    return "editing=" + active.Character.Name + " filtered=" + (active.Filter != null);
}
```

## 风险与边界

- **两个字段 / 属性都可能为 null。** 无参构造器之后 `Character` 与 `Filter` 都是 null。`Character` 是 public 字段，你可以在任何时候把它清成 null，**没有断言拦住你**。
- **`Filter` 推栈之后不可改。** `private set`，只能在构造器里赋值。想在会话中途放宽筛选，唯一办法是 `PopState` 再 `PushState` 一个新的。
- **`GameStateManager` 在 `HandleFinalize` 后被置 null。** `GameState.cs:89-98` 的 `HandleFinalize()` 会把 `_listeners = null` 和 `GameStateManager = null`。**出栈之后访问 `state.Predecessor` 或 `state.IsActive` 会 NRE。**
- **`IsMenuState => true` 影响音频，不只是语义标签。** 改它会改变菜单音乐是否继续播放。
- **全树没有内部构造方。** 1.4.5 的 CampaignSystem 里没有 `new BarberState(...)`，也没有 `CreateState<BarberState>()`。它是一个预留扩展点，**mod 需要自己提供触发时机**（玩家按键、菜单回调等）。
- **`Character` 的类型是 `BasicCharacterObject`，不是 `Hero`。** 传 `Hero.CharacterObject`（`CharacterObject` 类型）到 `CreateState<BarberState>` 会因为参数类型不匹配而失败——`Activator.CreateInstance` 找不到匹配构造器时抛异常。
- **`CharacterHelper.GetFaceGeneratorFilter()` 依赖 `Campaign.Current`。** `Campaign.Current` 为 null 时 NRE；没有注册 `IFacegenCampaignBehavior` 时返回 null。

## 怎么用

### 怎么拿到它

声明在 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BarberState.cs:5`，继承 `TaleWorlds.Core.GameState`，命名空间 `TaleWorlds.CampaignSystem.GameState`。有一件事必须先说清楚，它决定了这个类型怎么用：`grep -rlw "BarberState" --include=*.cs` 在整棵 v1.4.5 反编译树里**只命中一个文件，就是它自己的声明**。零生产者，也零消费者。

也就是说没有任何官方代码会替你构造它或读它。真正消费 `Character` 与 `Filter` 的那个 VM 类不在这份反编译语料里——它要么在未随附的某个程序集，要么在 1.4.5 这一版被重构掉了。所以入口只剩你自己：显式 `new`，或者走 `GameStateManager.CreateState<T>` 的反射路径，然后 `PushState`。

两个构造器的差别只在赋值时机：无参构造器把 `Character` 与 `Filter` 全留成 null；两参构造器同时写入两者，之后 `Character` 仍是 public 字段（任何时候可写），而 `Filter` 是 `{ get; private set; }`（**只有构造时能定**）。这个不对称是本页所有坑的根源。

### 典型用法

上面「真实示例」两段给的是两条推送路径：有参构造，和无参构造之后手工补 `Character`。下面这段是第三条，重点在推送之前多做一次就绪判定——因为 `Filter` 一旦入栈就再没有别的写法能改它：

```csharp
public static bool TryOpenBarber(BasicCharacterObject target)
{
    if (Game.Current == null || target == null)
    {
        return false;
    }
    GameStateManager manager = Game.Current.GameStateManager;

    // Filter 是 { get; private set; }：只能在 CreateState 的这一刻定下来
    IFaceGeneratorCustomFilter filter = CharacterHelper.GetFaceGeneratorFilter();

    BarberState state = manager.CreateState<BarberState>(target, filter);
    if (state == null)
    {
        return false;
    }

    // Character 是 public 字段，推栈后仍可写；但写 null 没有任何断言会拦你
    state.Character = target;
    manager.PushState(state);
    return true;
}
```

整段的可执行前提只有两条：`Game.Current` 非空、`target` 非空。因为零调用点，`CreateState` 走的是通用反射路径，不会有人替你把这两条校验掉。相比示例里的直接推送，这里多了一个 `state == null` 判定——`CreateState` 内部是 `Activator.CreateInstance`，参数形状对不上时返回 null 而不是抛异常。

`IsMenuState => true` 与走哪条构造器无关，推上去之后菜单音乐都会继续播放。想换人操作时，正确做法是 Pop 之后再 Push，而不是直接给 `Character` 重新赋值：它是字段不是属性，改它不触发任何变更通知，而在 v1.4.5 这棵树里你看不到消费方来补救。

### 什么时候不要用它

零调用点意味着这是一个**没有契约保护**的类型：没有官方行为依赖它的字段顺序，没有断言，没有版本迁移代码。所以不要把它当成扩展点来继承或改造，也不要指望改字段会立刻在界面上看到反应。

在 v1.4.5 上更实用的做法是绕过整个 state 层——直接调 `CharacterHelper` 的创意菜单相关方法，自己管生命周期。代价是你要自己实现 `IsMenuState` 那一层本该由框架提供的音频行为。

### 最容易踩的坑

无参构造器之后 `Character` 与 `Filter` 都是 null，而 `Character` 是 public 字段，你可以在任何时候把它清成 null，**没有任何断言拦住你**。`Filter` 的方向正好相反：它是 `private set`，推送之后连改都改不了，只能 Pop 出来重新 Push 一遍。

两个成员一个「随时可写但无保护」、一个「构造后不可写」，这个反向关系在复用同一个 state 实例时最容易出事：上一次留下的 `Filter` 会跟着这一次一起生效，而你以为它是新传的。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BarberState.cs` 是 22 行原始源码。跨版本比对时盯四点：两个构造器是否都还在（无参那个是 `CreateState<T>()` 无参重载的硬要求）、`Character` 是否仍是 public 字段而非属性、`Filter` 是否仍是 `private set`、`IsMenuState` 是否仍返回 true。另外注意基类 `GameState` 在 `TaleWorlds.Core` 而本类在 `TaleWorlds.CampaignSystem.GameState`，基类演进（`HandleFinalize` 的行为）会直接影响本页描述的生命周期。

## 依赖关系

- 基类：[GameState](../../core-extra/GameState) 提供 `Level` / `IsActive` / `Predecessor` / `RegisterListener` 与 `HandleInitialize` / `HandleFinalize` / `HandleActivate` 生命周期
- 栈管理器：[GameStateManager](../../core-extra/GameStateManager) 的 `CreateState<T>()` / `CreateState<T>(params object[])` / `PushState` / `PopState` / `LastOrDefault<T>`，是本类型唯一的落地路径
- 载荷类型：[BasicCharacterObject](../../core-extra/BasicCharacterObject)（`TaleWorlds.Core`）是 `Character` 字段的类型
- 过滤器接口：`IFaceGeneratorCustomFilter`（`TaleWorlds.Core`）的三个成员是 `GetHaircutIndices` / `GetFacialHairIndices` / `GetAvailableStages`
- 过滤器来源：[CharacterHelper](../../system/CharacterHelper) 的 `GetFaceGeneratorFilter()`（`CharacterHelper.cs:105-107`）→ `IFacegenCampaignBehavior.GetFaceGenFilter()`
- 同族 GameState：[CraftingState](../CraftingState)、[InventoryState](../InventoryState)、[PartyState](../PartyState)、[MapState](../MapState) 是同一模式的其它实例
- 桶首页：[campaign API 分区](../)
