---
title: "EntitySystem"
description: "组件注册表：用 _componentsOfTypes 字典沿基类链登记，实现按类型取单个/取全部的组件查找，引擎的 GameHandler 与战役实体组件都建在它之上。"
---

# EntitySystem

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class EntitySystem<T> where T : class, IEntityComponent`
**Base:** 无（仅隐式 `System.Object`；约束 `T : class, IEntityComponent`）
**File:** `TaleWorlds.Core/EntitySystem.cs`（全文 146 行，4095 字节）

## 概述

`EntitySystem<T>` 是一个**组件注册表**：往里塞实现了 `IEntityComponent` 的对象，之后能按类型把它们找回来。它有两条并行的存取路径——一条是「全部组件的扁平列表」`Components` / `GetComponents()`，另一条是「按类型索引」`GetComponent<T>()` / `GetComponents<T>()`——后者靠一个私有字典 `_componentsOfTypes` 实现，而**这个字典的键不只是组件的精确类型，而是从精确类型一路沿 `BaseType` 往上登记的每一层**。

这就是它全部的技术含量：`AddComponent` 里那个 `while (type != null && type != typeof(object))` 循环，把一个组件同时登记到 `typeof(MyComponent)`、`typeof(BaseComponent)`、`typeof(IEntityComponent)` 三个键下。于是「按基类找」天然可用——`GetComponent<BaseComponent>()` 能返回 `MyComponent` 实例。这是 1.3.0 里**没有**依赖注入容器时最省事的做法。

引擎自身有 5 处 `new EntitySystem<...>`：`Game._gameEntitySystem`（装 `GameHandler`）、`GameManagerBase._entitySystem`（装 `GameManagerComponent`）、`Campaign._campaignEntitySystem`（装 `CampaignEntityComponent`）、`SandBoxViewVisualManager._components`（装 `CampaignEntityVisualComponent`）、`VirtualPlayer._peerEntitySystem`（装 `PeerComponent`）。它们都不直接调用本类，而是在外面包一层薄壳，比如 [Game](../Game) 的 `AddGameHandler<T>` / `GetGameHandler<T>` / `RemoveGameHandler<T>` 三个方法就是 `this._gameEntitySystem.AddComponent<T>()` 这类一行转发。**你在 mod 里几乎总是通过那层壳来用，而不是 `new EntitySystem<T>()`。**

## 心智模型

**把它想成一个「会沿基类链建索引的小型服务注册表」，不是「容器」。** 它不持有所有权语义上的生命周期，只做登记和查找；对象真正的生命周期钩子是 `IEntityComponent` 的那两个方法。

**第一步，理解约束为什么是 `where T : class, IEntityComponent`。** `class` 排除值类型，是因为字典键用的引用相等——值类型每次装箱都是新对象，字典永远命中不了。`IEntityComponent` 只有两个成员：`void OnInitialize()` 和 `void OnFinalize()`。加上 `class` 约束，整套设计就定了：**这是一个「有明确加入/退出时机的对象」的集合**。

**第二步，理解索引是复制登记的。** `AddComponent` 的核心是：

```csharp
Type type = t.GetType();
while (type != null && type != typeof(object))
{
    if (!this._componentsOfTypes.ContainsKey(type))
    {
        this._componentsOfTypes.Add(type, Activator.CreateInstance(typeof(List<>).MakeGenericType(type)) as IList);
    }
    this._componentsOfTypes[type].Add(t);
    type = type.BaseType;
}
```

三层后果，一个比一个重要：

1. **按基类/接口查得到。** 一个 `class MyComp : CampaignEntityComponent`，登记在 `typeof(MyComp)`、`typeof(CampaignEntityComponent)`、`typeof(IEntityComponent)` 三个列表里。所以 `GetComponent<CampaignEntityComponent>()` 会返回它。这是设计意图，不是副作用。
2. **每个组件在多个列表里各占一份引用。** 增删的复杂度是 O(继承链长度)，继承链通常只有 2–3 层，实际成本可忽略。但要注意**这些列表是同一批对象的重复引用**，不是拷贝。
3. **`typeof(object)` 不参与登记。** 循环条件是 `type != typeof(object)`，所以不存在「按 object 查」这条路径。`GetComponent<object>()` 恒返回 `null`。

**第三步，理解两个「取」是不同语义。** `GetComponent<TComponent>()` 返回 `list[0]`，即**第一个**匹配的——但 `_componentsOfTypes[typeof(TComponent)]` 是一个 `List`，`Add` 的顺序就是注册顺序，所以它返回的是**最先注册的那个**，不是「最新的」。而 `GetComponents<TComponent>()` 返回整个列表。**同一个类型注册两次，`GetComponent` 只会看到第一次。** 这跟 [GameModel](../GameModel) 那一族「后注册覆盖前者」的倒序扫描是**完全相反**的约定，混用时极易出错。

**第四步，理解 `Add` 时的副作用。** 索引登记完，`AddComponent` 最后调 `t.OnInitialize()`。而 `RemoveComponent` 先调 `component.OnFinalize()` 再摘索引。所以生命周期是**由注册表代管的**：谁 `Add` 谁负责触发 `OnInitialize`，谁 `Remove` 谁负责触发 `OnFinalize`。

但这里有个真实存在的分叉：`CampaignEntityComponent` 用显式接口实现把 `IEntityComponent.OnInitialize()` 转发到自己的 `protected virtual OnInitialize()`：

```csharp
void IEntityComponent.OnInitialize()
{
    this.OnInitialize();
}
protected virtual OnInitialize() { }
```

也就是说，你在派生类里写 `protected override void OnInitialize()`，注册表调 `t.OnInitialize()` 时走的是接口方法，再转到你的重写。`GameHandler` 系走的是另一套（`GameManagerComponent`、`SandBoxManager` 等有各自的 `public override void OnInitialize()`）。**两套写法并存，实现前先看你的基类是哪一套。**

**第五步，理解 `Finalize(T)` 是什么。** `public void Finalize(T component)` 只做一件事：`component.OnFinalize()`。它**不摘索引**。所以它是「告诉组件你要收尾了」而不是「移除组件」。`SandBoxViewVisualManager.cs:92` 里 `this._components.Finalize(component);` 正是这个用法：先让组件自己清理，索引和列表都留着。要真正移除必须用 `RemoveComponent`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public EntitySystem()` | 建两个字段：`_components = new MBList<T>()`（注册顺序的全序列表）、`_componentsOfTypes = new Dictionary<Type, IList>()`（按类型索引）。两行，没有任何别的初始化。 |
| 扁平属性 | `public MBReadOnlyList<T> Components { get; }` | 返回 `_components` 本身，按**注册顺序**排列。只读承诺型返回，底层仍是可变的 `MBList<T>`。 |
| 泛型添加 | `public TComponent AddComponent<TComponent>() where TComponent : class, T, new()` | 走 `AddComponent(typeof(TComponent)) as TComponent`。`new()` 约束是必须的——内部靠 `Type.GetConstructor(Type.EmptyTypes)` 反射构造，所以你的组件**必须有无参构造**。会自动调 `OnInitialize()`。 |
| 动态添加 | `public T AddComponent(Type componentType)` | 真正的干活方法。反射造实例 → 塞进 `_components` → 沿基类链登记到 `_componentsOfTypes` 的每一层 → 调 `OnInitialize()` → 返回实例。需要 `Type` 时（从 XML/配置里读类型名）走这个。 |
| 取单个 | `public TComponent GetComponent<TComponent>() where TComponent : class, T` | 查 `_componentsOfTypes[typeof(TComponent)]`，**返回 `list[0]`**，即最先注册的那个。查不到返回 `default(TComponent)`（引用类型即 `null`），**不抛异常**。 |
| 取单个（动态） | `public T GetComponent(Type componentType)` | 同上，但键是传入的 `Type`。返回 `T` 而非具体类型，想要具体类型还得自己转型。 |
| 取多个 | `public List<TComponent> GetComponents<TComponent>() where TComponent : T` | 返回**内部那个 `IList` 实例本身**（`list as List<TComponent>`），不是拷贝。查不到时返回 `new List<TComponent>()` 空表。 |
| 取全部 | `public MBList<T> GetComponents()` | 直接返回 `_components`。注意返回的是 `MBList<T>`（可变子类）而非 `MBReadOnlyList<T>`——**这是引擎少数没遵守只读承诺的地方**。 |
| 收尾 | `public void Finalize(T component)` | 只调 `component.OnFinalize()`，**不动 `_components` 和 `_componentsOfTypes`**。用于「组件自己要清理但暂时不移除」。 |
| 移除 | `public void RemoveComponent(T component)` | 调 `OnFinalize()` → 从 `_components` 移除 → 沿基类链从每个 `_componentsOfTypes[type]` 里移除。**传 `null` 会直接抛 `NullReferenceException`**（`component.OnFinalize()` 那一行）。 |
| 移除（泛型） | `public void RemoveComponent<TComponent>() where TComponent : class, T` | `GetComponent<TComponent>()` 拿到第一个，判空后转 `T` 再调上面的重载。**只移除最先注册的那一个**，同类型的后续实例不受影响。 |

| 扩展点 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AutoGeneratedInstanceCollectObjects` | `protected virtual void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 反编译产物。**空实现**，而且是空的 `protected virtual`——继承它没有任何意义，也没人 override 它。写自定义组件时不必理它。 |
| `_componentsOfTypes` | `private readonly Dictionary<Type, IList>` | 真正的查找加速结构。键含每个组件的**每一层基类与接口**，值是 `List<T>` 的一个 `IList` 视图。存的是引用副本。 |
| `_components` | `private readonly MBList<T> _components` | 全序注册列表，是 `Components` 与 `GetComponents()` 的唯一数据源。 |

## 真实示例

最真实的用法是官方自己给 [Game](../Game) 写的那层壳——三个方法各一行，全部转发到 `EntitySystem<GameHandler>`：

```csharp
using TaleWorlds.Core;

public class MyGameHandler : GameHandler
{
    public static MyGameHandler Instance { get; private set; }

    public override void OnInitialize()
    {
        base.OnInitialize();
        Instance = this;
    }

    public int PendingLootRolls { get; private set; }
}

// 注册：Game.AddGameHandler<T>() 内部就是 _gameEntitySystem.AddComponent<T>()
Game.Current.AddGameHandler<MyGameHandler>();

// 取用：Game.GetGameHandler<T>() 内部就是 _gameEntitySystem.GetComponent<T>()
MyGameHandler handler = Game.Current.GetGameHandler<MyGameHandler>();
if (handler != null)
{
    handler.PendingLootRolls = 3;
}

// 注销：RemoveGameHandler<T>() → RemoveComponent<T>() → OnFinalize() + 摘索引
Game.Current.RemoveGameHandler<MyGameHandler>();
```

`GetGameHandler<T>()` **返回 `null` 的概率是实打实的**：只有你先 `AddGameHandler` 过才有实例。所以那行判空不能省。`GameHandler` 那一族不实现 `OnInitialize` 的重写签名时，基类就是默认实现——先看一眼你的基类要什么。

自定义一个真正的组件类型（而不是转发壳）需要自己满足全部约束，其中最容易被忽略的是**基类链决定索引键**：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

// MyComp 会被同时登记在 typeof(MyComp)、typeof(CampaignEntityComponent)、typeof(IEntityComponent) 下。
public class MyComp : CampaignEntityComponent
{
    public int Ticks { get; private set; }

    protected override void OnInitialize()
    {
        base.OnInitialize();
        this.Ticks = 0;
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        this.Ticks = 0;
    }
}

public class MyCompBehaviour : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        Campaign.Current.AddEntityComponent<MyComp>();
    }

    public override void SyncData(IDataStore dataStore)
    {
        if (dataStore.IsLoading)
        {
            // 按基类也能取到：索引里有 typeof(CampaignEntityComponent) 这一层。
            MyComp anyComp = Campaign.Current.GetEntityComponent<MyComp>();
            if (anyComp != null)
            {
                MBDebug.Print("MyComp registered, ticks=" + anyComp.Ticks);
            }
        }
    }
}
```

`AddEntityComponent<TComponent>()` 是 `Campaign.cs:1225` 上的壳，转发到 `_campaignEntitySystem.AddComponent<TComponent>()`；`GetEntityComponent<TComponent>()` 在 `Campaign.cs:1213`，还额外做了 `_campaignEntitySystem == null` 的保护。`AddComponent<T>()` 的 `new()` 约束意味着 `MyComp` 必须有无参构造——上面这个隐式默认构造正好满足。

按类型批量取出时，注意**返回的是内部列表本身**：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public static void NotifyAllComponents()
{
    List<CampaignEntityVisualComponent> comps =
        SandBoxViewSubModule.SandBoxViewVisualManager.GetComponents<CampaignEntityVisualComponent>();
    foreach (CampaignEntityVisualComponent c in comps)
    {
        c.OnGameLoadFinished();
    }
}
```

这段写法跟 `SandBoxViewVisualManager.cs:60-63` 官方代码几乎一致。注意 `comps` 就是系统内部那个 `List<T>` 实例——你在外面 `Add` 进去的东西会污染注册表的索引（因为 `GetComponents<T>` 绕过了 `AddComponent`，**不会**触发 `OnInitialize`、也不会登记到 `typeof(T)` 自己的键之外）。只遍历，别改。

## 风险与边界

- **`GetComponent` 返回「第一个」不是「最新的」。** `_componentsOfTypes[type]` 是 `List`，`Add` 顺序 = 注册顺序，`GetComponent` 取 `list[0]`。同类型注册两次，你只会拿到第一次的实例。这跟 [GameModel](../GameModel) 体系的倒序 `GetGameModel<T>()`（后者赢）**方向相反**，从 model 体系转过来的人几乎必踩。
- **`AddComponent<T>()` 要求无参构造。** 约束里的 `new()` 不是装饰，内部 `GetConstructor(Type.EmptyTypes).Invoke(...)` 真的靠它反射。带构造参数的组件只能走 `AddComponent(Type)`——但那条路同样要求无参构造。**两个入口都绕不开。**
- **`AddComponent(Type)` 没有异常包装。** 类型没有无参构造时，`GetConstructor(Type.EmptyTypes)` 返回 `null`，下一行 `.Invoke(...)` 直接 `NullReferenceException`。全树也没有任何 `ValidateComponentType` 之类的预检辅助方法可供调用，所以从配置里读类型名动态注册之前，只能自己先 `componentType.GetConstructor(Type.EmptyTypes) != null` 判断一遍。
- **`RemoveComponent(T)` 传 null 会崩。** 第一行就是 `component.OnFinalize()`。泛型重载做了判空，直接重载没有。
- **`RemoveComponent<TComponent>()` 只移除一个。** 它先 `GetComponent<TComponent>()` 拿第一个再移除。同类型多个实例时，剩下的还在字典里。
- **`Finalize` 不等于移除。** `Finalize(T)` 只触发 `OnFinalize()`。把它当「删除」用会导致组件已收尾但仍可被 `GetComponent` 取到，且 `OnInitialize` 不会被重新调用——组件处于「半死」状态。要删除就用 `RemoveComponent`。
- **`GetComponents<T>()` 返回内部列表引用。** 外部 `Add` 绕过全部登记逻辑，`_componentsOfTypes[typeof(T)]` 与 `_components` 会不一致，`RemoveComponent` 摘索引时可能对不上。**当作只读用。**
- **`GetComponents()` 无参重载返回 `MBList<T>`（可变）。** 与 `Components` 属性的 `MBReadOnlyList<T>` 不一致。这条不一致是引擎源码的事实，不是笔误，但足以让「保护引擎内部集合」的直觉判断失效。
- **索引登记不含 `typeof(object)`。** `GetComponent<object>()` 恒为 `null`，这是循环条件决定的。
- **组件不是 `MBObjectBase`，不会被存档。** `SaveableCoreTypeDefiner.cs:28` 有 `base.AddClassDefinition(typeof(EntitySystem<>), 15, null);`，登记的是容器本身。组件对象的持久化得由你自己在 `CampaignBehaviorBase.SyncData` 里做。
- **序列化版本号 15。** 存档系统认得 `EntitySystem<>` 这个封闭泛型。改动本类的字段布局可能影响旧档兼容性——但它的字段是两个私有 readonly 容器，实际风险低。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/EntitySystem.cs:9`，声明是 `public class EntitySystem<T> where T : class, IEntityComponent` —— **它不是泛型容器而是泛型基类**，而且约束要求 `T` 是**类**（`where T : class`）且实现 `IEntityComponent`。你只能**继承**它，不能写 `new EntitySystem<MyComponent>()` 当工具用。

实例一般由持有方 `new`，官方两处：`TaleWorlds.CampaignSystem/Campaign.cs:764` 的 `this._campaignEntitySystem = new EntitySystem<CampaignEntityComponent>();`（`Campaign.cs:2127` 也有一次重建），以及 `SandBox.View/SandBoxViewVisualManager.cs:16` 的 `this._components = new EntitySystem<CampaignEntityVisualComponent>();`。

拿组件的两个入口是 `GetComponent<TComponent>()`（`EntitySystem.cs:63`）和 `GetComponent(Type)`（`EntitySystem.cs:77`）；要全部同类则用 `GetComponents<TComponent>()`（`EntitySystem.cs:91`，返回 `List<TComponent>`）或无参 `GetComponents()`（`EntitySystem.cs:105`，返回 `MBList<T>`）。

**你的组件要实现的是 `IEntityComponent` 的两个方法。** 接口在 `bannerlord-1.3.0/TaleWorlds.Core/IEntityComponent.cs` 只有 `void OnInitialize();` 和 `void OnFinalize();`。继承 `CampaignEntityComponent`（`TaleWorlds.CampaignSystem/CampaignEntityComponent.cs:7`，它自己就 `implements IEntityComponent`）时，这两个方法已经有默认实现，你只在需要时覆写。

**一段可直接跑的注册与读取**：

```csharp
public class MyEntitySystem : EntitySystem<CampaignEntityComponent>
{
    public MyExtraComponent Extra { get; private set; }
    public void Ensure() { if (this.Extra == null) this.Extra = this.AddComponent<MyExtraComponent>(); }
}
```

`AddComponent<TComponent>()` 的泛型重载有 `new()` 约束，所以你的组件**必须有公开无参构造**，否则选泛型重载编译不过 —— 这种情况要改用 `AddComponent(Type)`（`EntitySystem.cs:40`），它内部是 `componentType.GetConstructor(Type.EmptyTypes).Invoke(new object[0])`，走的还是同一个无参构造。

**注册是沿基类链逐层登记的。** `AddComponent(Type)` 的方法体里有一个 `while (type != null && type != typeof(object))` 循环，把组件实例加进**它自己以及每一个基类**对应的列表。所以一个组件类型同时实现了三个 marker 接口，就会进三张表 —— `GetComponent` 对任意一个 marker 都能找到它。

**`OnInitialize()` 会在 `AddComponent` 内部就被调用。** 它是方法体倒数第二步（`t.OnInitialize(); return t;`），所以你在 `AddComponent` 返回后才去读组件的字段是可以的，但在 `OnInitialize` 实现体里反过来调外部状态则要小心时序。

**最常见的坑：`GetComponent` 返回「第一个」不是「最新的」。** `_componentsOfTypes[type]` 是 `List`，`Add` 顺序 = 注册顺序，`GetComponent` 取 `list[0]`。同类型注册两次，你只会拿到第一次的实例。这跟 [GameModel](../GameModel) 体系的倒序 `GetGameModel<T>()`（后者赢）方向相反，从 model 体系转过来的人几乎必踩。这条已在「风险与边界」首条展开。

## 跨版本提示

**这里有一个真实的、1.3.0 之后才有的成员，不能照着本页写跨版本代码。** 从 `bannerlord-1.3.15/` 开始（1.4.6、1.4.7、1.5.3 都继承），本类多了一个方法：

```csharp
public void SortComponents<TComponent>(Comparison<T> comparison) where TComponent : class, T
```

1.3.0 **没有** `SortComponents`。字节数也从 4095 / 146 行涨到 4294 / 149 行，`1.3.15`、`1.4.6`、`1.4.7`、`1.5.3` 四棵树完全一致（都是 4294 字节 / 149 行）。除这个方法外，本类的 public 成员集合在这五个版本之间**没有任何增删**——基类链登记的 `while` 循环、`GetComponent` 取 `list[0]` 的语义、`SaveableCoreTypeDefiner` 里的版本号 `15`，全部一字未改。

`SortComponents` 补上的正是本页指出的那个痛点：1.3.0 的 `GetComponents<T>()` 返回内部列表但**不给排序手段**，想要按某个键排序只能拿到列表后自己 `Sort`，那会同时打乱 `_components` 的注册顺序，进而影响 `GetComponent<T>()` 返回「第一个」的行为。1.3.15 起的做法是让注册表自己排，不打乱主列表。

结论：**1.3.0 上不要写依赖 `SortComponents` 的代码**；反过来，跨版本代码要注意它的存在与否。另外，实例数量随新系统增长（1.3.0 有 5 处 `new EntitySystem<...>`），但那是你要关注的宿主类的事，与本类无关。

## 依赖关系

- 组件契约：[IEntityComponent](../IEntityComponent) 声明 `OnInitialize()` / `OnFinalize()` 两个成员，本类的所有约束与生命周期调用都建立在它之上
- 唯一可写列表：[MBList](../MBList) 是 `_components` 的实际类型，同时继承 [MBReadOnlyList](../MBReadOnlyList)——本类「可变内部 / 只读暴露」的分工源头
- 典型壳宿主：[Game](../Game) 的 `AddGameHandler<T>` / `GetGameHandler<T>` / `RemoveGameHandler<T>` 是本类在 `GameHandler` 上的三条转发路径
- 索引语义对照：[GameModelsManager](../GameModelsManager) 的倒序 `GetGameModel<T>()` 与本类的正序 `GetComponent<T>()` 方向相反，读 [GameModel](../GameModel) 时值得对照
- 视图层宿主：沙盒视图的 `SandBoxViewVisualManager` 用 `EntitySystem<CampaignEntityVisualComponent>` 管理 `CampaignEntityVisualComponent` 实例
- 桶首页：[core-extra API 分区](../)