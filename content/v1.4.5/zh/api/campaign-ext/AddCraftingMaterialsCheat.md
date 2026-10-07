---
title: "AddCraftingMaterialsCheat"
description: "AddCraftingMaterialsCheat 作弊项：遍历 CraftingMaterials 枚举、经 SmithingModel 查表，给玩家背包每种锻造材料各加 10 个。"
---
# AddCraftingMaterialsCheat

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public class AddCraftingMaterialsCheat : GameplayCheatItem`
**源文件：** `Modules.SandBox/SandBox/Sandbox/AddCraftingMaterialsCheat.cs`（33 行）

## 概述

`AddCraftingMaterialsCheat` 是 SandBox 模块里的一个**地图作弊项**：在作弊菜单里点它，玩家背包里**每一种锻造材料各加 10 个**（铁矿石、六档铁锭、硬木、木炭，共 9 种、合计 90 个物品）。

它和 `Add100RenownCheat` 是同一个父类下的兄弟，但**行为结构完全不同**：`Add100RenownCheat` 是「一次动作调用」，而本项是**一次枚举遍历**。`ExecuteCheat()`（`AddCraftingMaterialsCheat.cs:11`）用一个 `for` 循环从 `CraftingMaterials` 的 0 号值走到 8 号值（`AddCraftingMaterialsCheat.cs:20`），每一轮做两件事：先用 `Campaign.Current.Models.SmithingModel.GetCraftingMaterialItem(val)` 把枚举值翻译成真实的 `ItemObject`（`AddCraftingMaterialsCheat.cs:22`），再把它塞进 `PartyBase.MainParty.ItemRoster`，数量 10（`AddCraftingMaterialsCheat.cs:23`）。

这里的关键是：**枚举值不等于物品**。`CraftingMaterials.Iron3` 只是一个整数，真正代表「精铁」的那个 `ItemObject` 由 `SmithingModel` 决定 —— 这层间接正是本页最值得学的地方。

## 心智模型

**第一层：它仍然是作弊系统的一个扩展点实例。** 契约链条没变：`GameplayCheatBase` 只要求 `GetName()`（`GameplayCheatBase.cs:7`），`GameplayCheatItem` 加上 `ExecuteCheat()`（`GameplayCheatItem.cs:5`），本类两个都实现（`AddCraftingMaterialsCheat.cs:11`、`AddCraftingMaterialsCheat.cs:27`）。它同样由 `GameplayCheatsManager.GetMapCheatList()` 现 new（`GameplayCheatsManager.cs:9`，本项在 `GameplayCheatsManager.cs:14`），实例无状态、短命。

**第二层（本页真正的重点）：它是「枚举 → 模型查表 → 名册写入」的教科书三段式。** 读这个方法时不要在 `for` 上停留，要看清它把三件本来分属不同层的事串了起来：

1. **枚举是键，不是值**。`CraftingMaterials`（`CraftingMaterials.cs:3`）的成员依次是 `IronOre`、`Iron1`…`Iron6`、`Wood`、`Charcoal`，最后还有一个 `NumCraftingMats`（`CraftingMaterials.cs:14`）。循环写的是 `(int)val < 9` 而不是 `val <= CraftingMaterials.NumCraftingMats`，就是为了**跳过这个哨兵值** —— `NumCraftingMats` 是「枚举有几个成员」的计数器，不对应任何物品。这是一个非常典型的「枚举末尾放计数哨兵」写法，也是这段代码里唯一一个不看注释就会踩的地方。
2. **查表必须过模型，不能自己 switch**。`GetCraftingMaterialItem` 是 `SmithingModel` 上的抽象方法（`SmithingModel.cs:16`），默认实现 `DefaultSmithingModel` 用一个 `switch` 把九个枚举值映射到 `DefaultItems` 里的具体物品（`DefaultSmithingModel.cs:170`，映射表在 `DefaultSmithingModel.cs:174` 起，兜底分支在 `DefaultSmithingModel.cs:183`）。走模型而不是自己写死 `DefaultItems.IronIngot3`，意味着**任何替换了 `SmithingModel` 的 mod 都会自动改变这个作弊项的行为** —— 比如一个把锻造材料改成自建物品的 mod，不需要碰这个类，作弊项就会发出它的物品。这就是「模型是扩展点」的实际收益。
3. **写入名册是唯一的副作用**。`PartyBase.MainParty.ItemRoster` 是玩家部队的物品名册（`PartyBase.cs:208` 的 `MainParty`、`PartyBase.cs:135` 的 `ItemRoster` 属性），`AddToCounts(ItemObject, int)` 返回实际变化量（`ItemRoster.cs:185`）。名册是物品的**计数容器**，不是物品定义本身；所以这个循环里没有创建任何新对象，只是把已存在的 `ItemObject` 计数加 10。

**它和 `Add100RenownCheat` 的区别，一句话说清**：`Add100RenownCheat` 把工作交给一个**动作类**（`*Action`，会广播事件、走战役规则），而 `AddCraftingMaterialsCheat` **直接改名册**（绕过 `*Action`，不广播任何事件、不产生任何日志）。前者是「按规则改变世界」，后者是「往背包里塞东西」。如果你在 mod 里需要「给材料」并且希望其他系统（成就、统计、事件订阅者）知道这件事，那就不该照抄这个方法，而该自己走对应的事件或动作层。

**一句话**：本类是「**枚举键 → 模型查表 → 名册计数**」这条最短链路的具体化，它的教学价值在于示范了**不要硬编码物品、把映射交给模型**。

## 怎么用

### 怎么拿到

和所有 SandBox 作弊项一样，它由注册表现 new，不持有状态，不建议自己长期持有实例。

- 源码位置：`Modules.SandBox/SandBox/Sandbox/AddCraftingMaterialsCheat.cs`，类声明在 `AddCraftingMaterialsCheat.cs:9`
- 执行入口：`ExecuteCheat()` 声明在 `AddCraftingMaterialsCheat.cs:11`；名称入口：`GetName()` 声明在 `AddCraftingMaterialsCheat.cs:27`
- 注册入口：`GameplayCheatsManager.GetMapCheatList()`（`GameplayCheatsManager.cs:9`），本项在 `GameplayCheatsManager.cs:14` 被构造
- 关键依赖：`SmithingModel.GetCraftingMaterialItem`（`SmithingModel.cs:16`，默认实现在 `DefaultSmithingModel.cs:170`）

### 典型用法

**A. 通过注册表执行（等价于玩家点菜单）：**

```csharp
foreach (GameplayCheatBase cheat in GameplayCheatsManager.GetMapCheatList())
{
    if (cheat is AddCraftingMaterialsCheat materialsCheat)
    {
        materialsCheat.ExecuteCheat();
    }
}
```

**B. 复刻它的核心逻辑，但只给自己想要的材料与数量：**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public static void GrantCraftingMaterials(CraftingMaterials material, int amount)
{
    ItemObject item = Campaign.Current.Models.SmithingModel.GetCraftingMaterialItem(material);
    PartyBase.MainParty.ItemRoster.AddToCounts(item, amount);
}
```

**C. 只给「贵的那几种」——遍历时自己加筛选：**

```csharp
// 跳过 Iron1（最便宜的一档），其余每种给 50
for (CraftingMaterials material = CraftingMaterials.IronOre;
     (int)material < 9;
     material = (CraftingMaterials)((int)material + 1))
{
    if (material == CraftingMaterials.Iron1)
    {
        continue;
    }
    ItemObject item = Campaign.Current.Models.SmithingModel.GetCraftingMaterialItem(material);
    PartyBase.MainParty.ItemRoster.AddToCounts(item, 50);
}
```

### 坑

- **`(int)val < 9` 里的 9 是硬编码的**。枚举目前有 9 个真实材料加 1 个 `NumCraftingMats` 哨兵（`CraftingMaterials.cs:14`），所以 `< 9` 正好覆盖 `IronOre`…`Charcoal`。但这是**魔数**：如果 TaleWorlds 以后在枚举中间插入一个新材料，这个循环会漏掉最后一个真实材料。写自己的版本时用 `(int)material < (int)CraftingMaterials.NumCraftingMats` 更稳。
- **`NumCraftingMats` 不是材料**。它只是计数哨兵，`DefaultSmithingModel` 的 `switch` 也没有为它准备分支（会落到兜底 `_ => DefaultItems.IronIngot1`，见 `DefaultSmithingModel.cs:183`）。如果你的循环条件写成 `<= NumCraftingMats`，就会白送一批「铁锭 1」。
- **绕过 `*Action` 意味着没有事件**。本项直接写 `ItemRoster`（`AddCraftingMaterialsCheat.cs:23`），不会触发物品获得相关的战役事件，成就/统计/日志类 mod 都看不到这次变更。需要「可被观察的」物品发放，请走动作层。
- **`Campaign.Current.Models` 只在战役运行时可用**。`GetCraftingMaterialItem` 要经 `Campaign.Current.Models.SmithingModel` 取到（`AddCraftingMaterialsCheat.cs:22`）；主菜单、编辑器里 `Campaign.Current` 为 null，会直接空引用。
- **`PartyBase.MainParty` 同样依赖战役上下文**（`PartyBase.cs:208`）。它和上一条一起决定了这个方法**只能在战役里调用**。
- **替换 `SmithingModel` 会静默改变本项行为**。这既是特性也是陷阱：如果你换掉的模型返回了 null 或返回了同一种物品给多个枚举值，这个循环会静默地加错东西 —— `AddToCounts` 对 null 的行为要自己确认，别指望这里报错。
- **`GetName()` 的文案写的是 `Add 10 Crafting Materials Each`**（`AddCraftingMaterialsCheat.cs:31`），但循环实际给的是 9 种 × 10 个 = 90 个。文案里的 "Each" 指的是「每种各 10 个」，不要误读成「总共 10 个」。

## 关键成员

- `ExecuteCheat()`（`AddCraftingMaterialsCheat.cs:11`，`public override void`）—— 作弊执行入口。遍历 `CraftingMaterials` 的 0…8 号值（`AddCraftingMaterialsCheat.cs:20`），每轮查表拿物品（`AddCraftingMaterialsCheat.cs:22`）并往玩家名册加 10（`AddCraftingMaterialsCheat.cs:23`）。
- `GetName()`（`AddCraftingMaterialsCheat.cs:27`，`public override TextObject`）—— 菜单显示名入口。返回本地化键 `{=63jJ3GGY}` 对应的 `TextObject`，回退文本为 `Add 10 Crafting Materials Each`（`AddCraftingMaterialsCheat.cs:31`）。
- `CraftingMaterials.IronOre`（`CraftingMaterials.cs:5`）—— 循环起点，值 0，对应铁矿石。
- `CraftingMaterials.Iron1` … `CraftingMaterials.Iron6`（`CraftingMaterials.cs:6` 至 `CraftingMaterials.cs:11`）—— 六个档次的铁锭，由低到高排列。
- `CraftingMaterials.Wood`（`CraftingMaterials.cs:12`）—— 硬木，锻造燃料/材料之一。
- `CraftingMaterials.Charcoal`（`CraftingMaterials.cs:13`）—— 木炭，循环实际覆盖的最后一个材料（值 8）。
- `CraftingMaterials.NumCraftingMats`（`CraftingMaterials.cs:14`）—— **计数哨兵，不是材料**；循环条件 `(int)val < 9` 正是为了把它排除在外。
- `SmithingModel.GetCraftingMaterialItem(CraftingMaterials)`（`SmithingModel.cs:16`，`public abstract`）—— 枚举到 `ItemObject` 的翻译器。本项通过它取物品，因此**替换该模型即可改变本项行为**。
- `ItemRoster.AddToCounts(ItemObject, int)`（`ItemRoster.cs:185`）—— 名册计数写入点。返回实际变化量；负数表示移除。
- `GameplayCheatItem.ExecuteCheat()`（`GameplayCheatItem.cs:5`，`public abstract`）—— 本类实现的抽象槽，定义「点击后做什么」。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

// 示例 1：复刻本作弊项，但把「每种 10 个」改成「每种按重要性给不同数量」
public static void GrantTieredCraftingMaterials()
{
    for (CraftingMaterials material = CraftingMaterials.IronOre;
         (int)material < (int)CraftingMaterials.NumCraftingMats;   // 比硬编码 9 更稳
         material = (CraftingMaterials)((int)material + 1))
    {
        ItemObject item = Campaign.Current.Models.SmithingModel.GetCraftingMaterialItem(material);
        int amount = material == CraftingMaterials.Charcoal ? 200 : 10;
        PartyBase.MainParty.ItemRoster.AddToCounts(item, amount);
    }
}

// 示例 2：只查表、不发放——先看看某个枚举值当前映射到哪个物品
public static string DescribeCraftingMaterial(CraftingMaterials material)
{
    ItemObject item = Campaign.Current.Models.SmithingModel.GetCraftingMaterialItem(material);
    return item != null ? item.Name.ToString() : "<no item mapped>";
}

// 示例 3：作为作弊项被菜单执行（与玩家点击等价）
public static void RunFromCheatMenu()
{
    foreach (GameplayCheatBase cheat in GameplayCheatsManager.GetMapCheatList())
    {
        if (cheat is AddCraftingMaterialsCheat item)
        {
            item.ExecuteCheat();
        }
    }
}
```

## 参见

- [GameplayCheatItem](../GameplayCheatItem) — 本类的直接父类，定义 `ExecuteCheat()` 抽象槽
- [GameplayCheatsManager](../GameplayCheatsManager) — 作弊注册表，本项在 `GetMapCheatList()` 里被创建
- [SmithingModel](../SmithingModel) — 枚举到物品的翻译器，本项的关键依赖与可替换扩展点
- [ItemRoster](../ItemRoster) — 被写入的玩家物品名册容器
- [Add100RenownCheat](../Add100RenownCheat) — 兄弟作弊项，但走动作层而非直接改名册
- [Add1000GoldCheat](../Add1000GoldCheat) — 同一注册表里的另一项，同样只改一个数值

## 导航

- [本区域目录](../)
