---
title: "MBGameModel<T>"
description: "GameModel 之上的装饰式泛型基类：用一个 private protected 的 BaseModel 把「被覆盖者」塞给「覆盖者」，全部覆盖机制就靠这两个成员实现，没有接口默认方法也没有优先级声明。"
---

# MBGameModel\<T\>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** [GameModel](../GameModel)（进而隐式 `System.Object`）
**File:** `TaleWorlds.Core/MBGameModel.cs`（全文 19 行 / 579 字节，public 成员只有 2 个）

## 概述

`MBGameModel<T>` 是整个引擎的**装饰器基类**，全文只有两个成员：一个属性和一个方法。但 Bannerlord 的模型覆盖机制——150 多个 `XxxModel` 的逐层包装——全部由这两个成员实现，没有别的地方。

先说结论：**你不会实例化它，也不会实现它**。它是 `abstract` 且**零抽象成员**，`grep -rnE "class\s+\w+\s*:\s*MBGameModel<" bannerlord-1.3.0/` 命中 144 处，全是「拿一个已有的 `XxxModel` 抽象类当 `T`」的装饰类，没有一处是 `MBGameModel<SomethingNew>`（`SomethingNew` 既非官方模型也非派生链上的模型）。而 `class X : GameModel` 直连基类的命中是 **0**。这两条数字合起来定义了唯一合法用法：**你派生的是某个具体的模型抽象类，而不是这两个基类中的任何一个。**

## 心智模型

把 `MBGameModel<T>` 想象成**一条链节**。链节有两个接口面：向上接一个 `T`（被包装者），向下暴露 `T` 的全部抽象成员（被包装者身上那份契约）。三段代码把整件事讲完：

**注册时，`BasicGameStarter.AddModel<T>` 做两件事。** 泛型重载的完整实现是三行：先 `T model = this.GetModel<T>()` 从已注册的链尾往前扫出一个现成的 `T`；再 `gameModel.Initialize(model)`；最后 `this._models.Add(gameModel)`。所以 `Initialize` 是**唯一**能写 `BaseModel` 的入口——setter 是 `private`，调用方在类型外部。

**使用时，派生类读 `this.BaseModel` 转发。** `BaseModel` 声明成 `private protected T BaseModel { protected get; private set; }`——`private protected` 意味着「只有同程序集内、且派生自 `MBGameModel<T>` 的类型能看见这个成员」，外部代码既拿不到也设不了。getter 是 `protected` 所以派生类能读；setter 是 `private` 所以只有 `Initialize` 能写。这两个可见性修饰符一起把链路锁成单向。

**注意 `T` 通常不是你自己的类名。** 覆盖官方的 `AgeModel` 时写的是 `MyAgeModel : MBGameModel<AgeModel>`，`T` 是 `AgeModel` 而不是 `MyAgeModel`。原因在 [GameModelsManager](../GameModelsManager) 的 `GetGameModel<T>()`：它只做 `this._gameModels[i] as T`，扫到**任何一个** `AgeModel` 都算数。于是三方 mod 无论叫什么名字、无论来自哪个程序集，都能被同一条 `AddModel<AgeModel>` 接住，链不会因为类名不同而断。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BaseModel` | `private protected T BaseModel { protected get; private set; }` | 被包装的上一环。`private protected` 挡住外部，派生类读得到；getter `protected` 让覆盖类转发，setter `private` 让赋值只能经由 `Initialize`。这是「装饰器里的被装饰对象引用」 |
| `Initialize` | `public void Initialize(T baseModel)` | 把 `BaseModel` 接上的一行。`public` 但设计意图是「只给 `BasicGameStarter.AddModel<T>` 调」，mod 直接调它等于手工伪造一条链 |
| 类约束 | `where T : GameModel` | 保证 `T` 本身是个模型，从而 `as T` 查找有意义。约束只到 `GameModel`，所以 `T` 可以是抽象类，这正是覆盖官方模型的写法 |

（`MBGameModel<T>` 没有构造函数，也没有其它成员。上面表格之外的两个 public 成员数是 0。）

## 真实示例

覆盖一个官方模型（这就是官沙盒自己的写法，逐字照抄自 `SandBox/SandBoxSubModule.cs` 的模式）：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        gameStarterObject.AddModel<StrikeMagnitudeCalculationModel>(new MyStrikeMagnitudeModel());
    }
}

public class MyStrikeMagnitudeModel : MBGameModel<StrikeMagnitudeCalculationModel>
{
    public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)
    {
        float vanilla = this.BaseModel.GetBluntDamageFactorByDamageType(damageType);
        return vanilla * 1.25f;
    }
}
```

`gameStarterObject.AddModel<StrikeMagnitudeCalculationModel>(...)` 走的是**泛型重载**，所以 `BaseModel` 会被自动接上。写成 `this.BaseModel.` 而不是硬编码 `25f` 是这条链的全部意义：前面注册的 mod 的修改被你看到了，你的结果也留给后面的人看。

纯覆盖、不碰行为、只调参数时的最短形态（`T` 仍然是官方抽象类）：

```csharp
public class MyAgeModel : MBGameModel<AgeModel>
{
    public override int MaxAge { get { return this.BaseModel.MaxAge + 10; } }
    public override int BecomeOldAge { get { return this.BaseModel.BecomeOldAge + 3; } }
}
```

官方 `AgeModel` 一共声明了 7 个抽象年龄属性和 1 个抽象方法 `GetAgeLimitForLocation`。C# 的重写规则是**逐成员**的，所以哪怕你只想改 `MaxAge`，也必须把其余 8 个成员一个不落地重写出来，漏一个就是编译错误。这一页不是讲 `AgeModel` 本身（见 [AgeModel](../../campaign/AgeModel)），而是讲你重写时那个 `this.BaseModel.` 该怎么用。

自己造一个新模型槽位（`T` 是你自己定义的类型，仍然满足约束）：

```csharp
public class MyLootTableModel : MBGameModel<MyLootTableModelBase>
{
    public override int RollCount(int tier)
    {
        return this.BaseModel.RollCount(tier) * 2;
    }
}

public class MyLootTableModelBase : GameModel
{
    public virtual int RollCount(int tier) { return tier; }
}
```

这是本类唯一「造新槽位」的正当姿势：造一个**可继承的** `GameModel` 子类当契约，再让装饰类包住它。之所以仍要过 `MBGameModel<T>` 这一层而不直接写 `public class MyLootTableModel : GameModel`，是因为只有走 `Initialize` 的对象才能被别人继续装饰——一层裸 `GameModel` 是链的终点。

## 风险与边界

- **`T` 写错会静默断链，不报编译错。** `where T : GameModel` 只保证 `T` 是模型，不保证它就是别人注册的那个。若你的 `T` 是另一个没人注册的派生类，`GetModel<T>()` 会返回 `null`，`BaseModel` 就是 `null`，运行期第一次转发就 `NullReferenceException`。判断标准很简单：**`T` 必须是链上已经存在、或者你自己会先注册的那一个。**
- **`Initialize` 是 `public` 的，不受可见性保护。** 你可以手动 `new` 一个装饰类然后 `Initialize(something)`。框架不会拦你，但从此这条链的所有权归你——别的 mod 的 `AddModel<T>` 拿到的 `BaseModel` 会是你的半成品而不是官方的。实际开发中只在 `InitializeGameStarter` 里用框架的 `AddModel<T>`。
- **链长 = 覆盖这个模型的 mod 数，每层一次虚调用。** 三四个 mod 覆盖同一模型时，一次 `GetBluntDamageFactorByDamageType` 要串行经过 4 层 `BaseModel.` 转发。层数多了既有 CPU 成本，也会让「我改了没生效」的排查变长——因为问题可能出在链中间的某一环。
- **重写是逐成员的硬约束。** `T` 的每个抽象成员都得在你这层重写一遍，这跟 `BaseModel` 转发无关，是 C# 语言规则。所以升级游戏版本时如果官方给某个 `XxxModel` 加了新的抽象成员，**所有已发布的覆盖类都会编译失败**——这是本页列出的全部 API 里升级风险最高的一条。
- **`MBGameModel<T>` 本身不参与存档。** 它不是 `MBObjectBase` 子类，`BaseModel` 没有 `[SaveableField]`。链是每次游戏启动重新装配的运行期结构，不要在 `BaseModel` 链上的任何一层里存需要持久化的状态。
- **拿不到 `BaseModel` 就不叫装饰器。** 一个 `MyModel : MBGameModel<OfficialModel>` 但从不调 `Initialize` 的对象，`BaseModel` 是 `null`。`MBGameModel<T>` 的字段声明里 `_cachedStringBuilder` 之类都不存在，它真的只有一个自动属性，所以「忘了初始化」这个 bug 不会有任何编译或构造期提示。

## 跨版本提示

`MBGameModel.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五个源码树里都是 **579 字节**，且**逐字节一致**——只有文件头的 `Token` / `RVA` 注释不同（`RID` 从 172 变到 174 是因为编译单元顺序变了，源码本身没变）。public 成员集合跨 1.3 → 1.5 三个大版本完全不变：还是 `BaseModel` 一个属性 + `Initialize` 一个方法，`private protected` 的可见性一个字没动。

也就是说：**基类本身零升级风险**。变的只有派生层——`MBGameModel<` 的具体使用点在 1.3.0 是 144 个类声明，后续版本随新系统（海战、编队、GauntletUI 重写）持续增加。但新增的都是新的 `XxxModel` 槽位，不会改动已有槽位的抽象成员列表。**升级时真正会编译失败的不是这一页，而是你重写的那批 `XxxModel` 的抽象成员集合**。

## 依赖关系

- 基类：[GameModel](../GameModel) 是 `MBGameModel<T>` 的直接基类与泛型约束上界，全树零直接派生
- 消费端查找：[GameModelsManager](../GameModelsManager) 的 `protected T GetGameModel<T>()` 用 `as T` 倒序扫出链尾的 `T`，`Initialize` 收到的就是它
- 注册入口：[IGameStarter](../IGameStarter) 声明两个 `AddModel` 重载，[BasicGameStarter](../../mission-ext/BasicGameStarter) 的泛型重载负责调 `Initialize`
- 聚合实例：[BasicGameModels](../BasicGameModels) 在构造器里一次性把上百个模型槽位填满，消费端拿到的模型就是经过 N 层装饰后的最外层
- 典型被包装的契约：[AgeModel](../../campaign/AgeModel) 是最小的抽象模型（7 个抽象年龄属性 + 1 个抽象方法），[ItemValueModel](../ItemValueModel) 是三个抽象方法的经济向模型
- 启动编排：[MBGameManager](../../mission-ext/MBGameManager) 的 `InitializeGameStarter` 是所有 `AddModel` 调用的实际发生地
- 桶首页：[core-extra API 分区](../)
