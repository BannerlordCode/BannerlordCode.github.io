---
title: "Add100RenownCheat"
description: "Add100RenownCheat 作弊项：给玩家主英雄一次性加 100 声望的 SandBox 地图作弊，也是 GameplayCheatItem 子类最薄的写法样板。"
---
# Add100RenownCheat

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public class Add100RenownCheat : GameplayCheatItem`
**源文件：** `Modules.SandBox/SandBox/Sandbox/Add100RenownCheat.cs`（21 行）

## 概述

`Add100RenownCheat` 是 SandBox 模块里的一个**地图作弊项**：在作弊菜单里点它，玩家主英雄立刻获得 100 点声望。整个类只有 21 行、两个 override 方法，是 `GameplayCheatItem` 家族里最薄的一个 —— 正因如此，它是理解「一个作弊项该怎么写」的最佳样板。

它本身不做任何计算，只是把请求转发给战役动作层：`ExecuteCheat()` 调用 `GainRenownAction.Apply(Hero.MainHero, 100f, true)`（`Add100RenownCheat.cs:12`），第三个参数 `true` 表示**不要弹通知**。声望真正入账发生在动作类内部：先 `hero.Clan.AddRenown(...)`，再广播 `OnRenownGained`（`GainRenownAction.cs:5` 的 `ApplyInternal` 里）。

## 心智模型

把它当成**控制台作弊系统的一个扩展点实例**，而不是一个可以随便 new 出来的工具类。作弊系统的契约由三层叠成：

- `GameplayCheatBase`（`GameplayCheatBase.cs:5`）只要求一个 `GetName()`（`GameplayCheatBase.cs:7`），定义「这一项叫什么」；
- `GameplayCheatItem`（`GameplayCheatItem.cs:3`）在它之上再加一个 `ExecuteCheat()`（`GameplayCheatItem.cs:5`），定义「点了做什么」—— 也就是说它是**只有动作、没有状态**的中间基类；
- 具体的 `Add100RenownCheat` 把这两个抽象方法都实现掉（`Add100RenownCheat.cs:10`、`Add100RenownCheat.cs:15`），这个类就算完成了。

**谁创建它、谁调用它**：作弊项由 `GameplayCheatsManager.GetMapCheatList()`（`GameplayCheatsManager.cs:9`）在每次调用时**现 new 出来**，本项在第 13 行 `yield return new Add100RenownCheat();`（`GameplayCheatsManager.cs:13`）。这意味着实例是**无状态、短命**的：没有单例、没有注册表字段、没有地方给你配置它。UI 侧 `CheatActionItemVM.ExecuteAction()`（`CheatActionItemVM.cs:25`）先调 `Cheat?.ExecuteCheat()`，再回调 `_onCheatExecuted`，所以「执行」与「菜单刷新」是两步，而不是一次调用。

**为什么它长得这么简单**：作弊项被设计成「一个类 = 一个固定效果」。数值（100）、目标（`Hero.MainHero`）、通知开关（`true`）全部硬编码在方法体里 —— 因为作弊菜单是**按名字一项项列出来**的，没有参数输入控件。想改数值，就要新写一个类，而不是给这个类传参。这也解释了为什么 SandBox 里会同时存在 `Add1000GoldCheat`、`Add100InfluenceCheat`、`Add100RenownCheat` 这类看起来高度重复的小类。

**`GetName()` 返回的不是字符串**，而是 `TextObject`（`Add100RenownCheat.cs:15`）。返回体用的是带本地化键的构造形式 `new TextObject("{=zXQwb3lj}Add 100 Renown", ...)`（`Add100RenownCheat.cs:19`）：`{=zXQwb3lj}` 是**键**，`Add 100 Renown` 是键缺失时的**回退文本**。所以菜单里到底显示什么，取决于当前语言包有没有这个键 —— 只改 C# 里的回退文本，不会改变已本地化语言的显示。

一句话总结：**它是「作弊系统 → 战役动作层」之间最短的一根导线**，价值在模式而不在功能。要加一个自定义作弊项，你真正需要读懂的是它的形状，而不是它的行为。

## 怎么用

### 怎么拿到

`Add100RenownCheat` 没有特殊的获取途径，也**不建议自己 new 来长期持有**（它不持有任何状态，持有它没有任何意义）。标准入口是注册表：

- 源码位置：`Modules.SandBox/SandBox/Sandbox/Add100RenownCheat.cs`，类声明在 `Add100RenownCheat.cs:8`
- 执行入口：`ExecuteCheat()` 声明在 `Add100RenownCheat.cs:10`；名称入口：`GetName()` 声明在 `Add100RenownCheat.cs:15`
- 注册入口：`GameplayCheatsManager.GetMapCheatList()`（`GameplayCheatsManager.cs:9`），本项在 `GameplayCheatsManager.cs:13` 被构造
- 实际调用者：`CheatActionItemVM.ExecuteAction()`（`CheatActionItemVM.cs:25`），它调用的是 `Cheat?.ExecuteCheat()`

拿到实例的标准写法是遍历注册表并按类型筛选；执行完就把它丢掉。

### 典型用法

**A. 遍历作弊列表，命中本项才执行：**

```csharp
foreach (GameplayCheatBase cheat in GameplayCheatsManager.GetMapCheatList())
{
    if (cheat is Add100RenownCheat renownCheat)
    {
        renownCheat.ExecuteCheat();
    }
}
```

**B. 不走作弊菜单，直接调底层动作（效果等价，但数值与通知可控）：**

```csharp
// 与 Add100RenownCheat.ExecuteCheat() 等价，但这次让游戏弹出通知
GainRenownAction.Apply(Hero.MainHero, 100f, doNotNotify: false);
```

**C. 照抄这个模式，写一个自己的作弊项：**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;

namespace SandBox;

public class Add500RenownCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        GainRenownAction.Apply(Hero.MainHero, 500f, doNotNotify: false);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=myMod_add500renown}Add 500 Renown", null);
    }
}
```

写完这个类还不会出现在菜单里 —— 还要在 `GameplayCheatsManager.GetMapCheatList()` 里加一行 `yield return new Add500RenownCheat();`，或者用 Harmony 给该方法打补丁把返回值拼上。

### 坑

- **`Hero.MainHero` 可能是 null**。`ExecuteCheat()` 直接把它传进 `GainRenownAction.Apply`（`Add100RenownCheat.cs:12`）。在没有战役上下文的地方（主菜单、编辑器、纯单元测试）调用会抛空引用。菜单路径下是安全的，因为菜单本身只在战役里存在。
- **第三个参数是「不通知」，不是「不允许失败」**。传 `true` 只是跳过 `OnRenownGained` 的弹窗，声望照加。想看到「+100」的提示就必须传 `false`。
- **非正值会被静默忽略**。`GainRenownAction.ApplyInternal` 的入口判断是 `gainedRenown > 0f`（`GainRenownAction.cs:5`），传 0 或负数既不报错也不生效 —— 如果你从配置里读数值，记得自己先校验。
- **`GetName()` 每次调用都 new 一个 `TextObject`**（`Add100RenownCheat.cs:19`）。不要把它当缓存字段反复取；UI 侧每次 `RefreshValues()` 都会重新调一次。
- **改这个类改不到控制台的 `campaign.add_renown`**。那是 `CampaignCheats` 里的命令行函数，与 SandBox 作弊菜单是两套独立入口，本项只在菜单里出现。
- **`SandBox` 模块被禁用时整项消失**。注册表 `GameplayCheatsManager` 本身就在 SandBox 模块内，模块不加载就没人调 `GetMapCheatList()`。
- **别在 `ExecuteCheat()` 里做耗时或异步工作**。它是在 UI 点击回调里被同步调用的（`CheatActionItemVM.cs:25`），阻塞会直接卡住菜单。

## 关键成员

- `ExecuteCheat()`（`Add100RenownCheat.cs:10`，`public override void`）—— 作弊执行入口。无参数、无返回值，唯一动作是把「给主英雄加 100 声望、且不弹通知」交给 `GainRenownAction.Apply`（`Add100RenownCheat.cs:12`）。
- `GetName()`（`Add100RenownCheat.cs:15`，`public override TextObject`）—— 菜单显示名入口。返回本地化键 `{=zXQwb3lj}` 对应的 `TextObject`，键缺失时回退到 `Add 100 Renown`（`Add100RenownCheat.cs:19`）。
- `GameplayCheatItem.ExecuteCheat()`（`GameplayCheatItem.cs:5`，`public abstract`）—— 父类留下的抽象槽：凡继承 `GameplayCheatItem` 者必须实现，否则编译不过。这是「点击后做什么」的唯一定义点。
- `GameplayCheatBase.GetName()`（`GameplayCheatBase.cs:7`，`public abstract TextObject`）—— 更上层的抽象槽，只管「叫什么」，连动作都不要求；像 `GameplayCheatGroup` 那种只有名字、点开是子列表的项也归它管。
- 本类**没有任何字段、属性或构造函数**。它不持有状态，所以每次 `GetMapCheatList()` 都安全地重新构造一个新实例。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;

// 示例 1：只在注册表里真有这一项时才执行，避免硬编码依赖
public static bool TryGrantRenownCheat()
{
    foreach (GameplayCheatBase cheat in GameplayCheatsManager.GetMapCheatList())
    {
        if (cheat is Add100RenownCheat item)
        {
            item.ExecuteCheat();   // 内部即 GainRenownAction.Apply(Hero.MainHero, 100f, true)
            return true;
        }
    }
    return false;
}

// 示例 2：绕过作弊系统，自己决定数值与是否通知
public static void GrantRenownTo(Hero hero, float amount)
{
    GainRenownAction.Apply(hero, amount, doNotNotify: false);
}

// 示例 3：把作弊项的名字安全地取出来（GetName 返回 TextObject，不是 string）
public static string DescribeCheat(GameplayCheatItem item)
{
    TextObject name = item.GetName();
    return name != null ? name.ToString() : string.Empty;
}
```

## 参见

- [GameplayCheatItem](../GameplayCheatItem) — 本类的直接父类，定义 `ExecuteCheat()` 抽象槽
- [GameplayCheatsManager](../GameplayCheatsManager) — 作弊注册表，本项在 `GetMapCheatList()` 里被创建
- [GainRenownAction](../GainRenownAction) — 真正把声望写进家族的战役动作类
- [AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat) — 同一注册表里的另一个作弊项，写法几乎相同但作用于物品栏
- [CheatActionItemVM](../CheatActionItemVM) — UI 侧调用 `ExecuteCheat()` 的视图模型
- [Hero](../../campaign/Hero) — 本项的作用目标，`Hero.MainHero` 的来处

## 导航

- [本区域目录](../)
