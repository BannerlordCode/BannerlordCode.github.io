---
title: "SmithingModel"
description: "计算锻冶（武器打造）相关的配方精炼产出、熔炼回收、武器设计难度、能量与技能经验消耗，以及部件研究点数，由 Campaign 在运行时通过 Campaign.Current.Models.SmithingModel 解析。"
---

# SmithingModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class SmithingModel : MBGameModel<SmithingModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SmithingModel.cs

## 概述

该模型是武器打造经济体系的“规则层”：它规定了矿石如何精炼成更高阶铁锭、装备如何熔炼回原料、一件武器设计有多难造、打造/精炼/熔炼各自消耗多少铁匠能量与锻造技能经验，以及解锁新部件需要多少研究点数。它本身是纯计算，不持有任何世界状态；真正的物品增减、能量扣减、经验与研究点累加由 `CraftingCampaignBehavior` 在调用它之后完成。

## 心智模型

SmithingModel 是一个无状态的计算扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例并持有，运行时统一用 `Campaign.Current.Models.SmithingModel` 取得，它既不参与存档序列化，也不会在每个 tick 被重新构造。具体默认实现 `DefaultSmithingModel` 在纯公式基础上叠加了锻造系 perk（如 `PracticalRefiner`、`CuriousSmelter`、`ExperiencedSmith`、`MasterSmith`、`LegendarySmith`）与部件阶位（`PieceTier`）的影响。把模型结果真正落到世界上的只有 `CraftingCampaignBehavior`（精炼、熔炼、自由打造/订单打造、研究点累加），而 `CraftingVM`、`RefinementVM`、`SmeltingItemVM`、`WeaponDesignVM` 等界面 ViewModel 则只读它来显示成本、难度与产出，提示刷新器 `TooltipRefresherCollection` 也借它显示单件部件难度与原料物品。`CampaignCheats` 则直接用 `GetCraftingMaterialItem` 给主角塞原料。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要试图给模型“字段”赋值——它没有需要持久化的字段。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“打造/精炼/熔炼”的规则时，读取 `Campaign.Current.Models.SmithingModel` 的返回值，或提供一个新的派生类覆盖这些抽象方法并通过子模块注册替换默认实现。
- **不要使用**：不要绕过 `CraftingCampaignBehavior` 与打造 Action，自己手动给物品栏加原料、给英雄加锻造经验或扣能量——模型只算数，真正的状态写入在行为里。也不要在 `Mission`/战场逻辑里取 `Campaign.Current.Models`；模型属于 Campaign 层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SmithingModel>()` 解析并缓存实例。
- [Hero](../Hero) —— 作为铁匠（`weaponsmith`）传入；其锻造技能值与 perk 直接驱动难度、品质概率、能量与经验的计算。
- [Crafting](../Crafting) —— 武器打造子系统，承载 `Crafting.RefiningFormula`、`CraftingMaterials`、`CraftingPiece`、`WeaponDesign` 等类型（本文档不单独链这些类型页，因站点暂无对应深页）。

下游与协同系统：

- [CraftingCampaignBehavior](../CraftingCampaignBehavior) —— 真正的调用方与写入方：精炼、熔炼、自由打造/订单打造、研究点累加全部在此行为内先调模型再改世界状态。
- [DefaultSmithingModel](../DefaultSmithingModel) —— 本模型的具体默认实现，所有抽象方法的基准算法所在。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) / [SettlementSecurityModel](../SettlementSecurityModel) —— 同属定居点与产业规则模型簇，常被一起派生替换。
- [ItemObject](../../core/ItemObject) —— 被熔炼/打造出来的物品类型，是多个方法的输入与输出载体。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SmithingModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了难度/成本公式，但真正把物品、能量、经验、研究点写回世界的仍是 `CraftingCampaignBehavior`。只替换模型、却让行为按旧假设处理物品栏，会出现数值与预测不一致。
- **`ref` 参数被改动**：`GetSkillXpForRefining` 与 `GetEnergyCostForRefining` 接收 `ref Crafting.RefiningFormula`。模型内部只读取配方内容，但派生实现若意外改动了 `ref` 传入的配方对象，会影响后续逻辑。

## 成员说明

### 精炼（Refining）

- **`IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`**
  - 用途：返回该铁匠当前可用的精炼配方集合（输入原料、输出原料与数量）。默认实现按 `weaponsmith` 是否拥有 `CharcoalMaker`/`IronMaker`/`SteelMaker`/`SteelMaker2`/`SteelMaker3` 等 perk 决定是否开放更高阶配方（如是否产炭、铁锭阶位上限）。
  - 副作用：无，纯枚举。
  - 调用时机：`RefinementVM` 与 `CraftingCampaignBehavior` 在打开精炼界面或执行精炼时调用，用于列出可执行配方。

- **`int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`**
  - 用途：返回本次精炼消耗的铁匠能量（默认基准 6，拥有 `PracticalRefiner` perk 时按 `PrimaryBonus` 加成）。
  - 副作用：无；`ref` 仅用于读取配方内容。
  - 调用时机：`CraftingCampaignBehavior` 执行精炼前调用，用于扣减 `hero` 的可用能量。

- **`int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`**
  - 用途：返回本次精炼给予的锻造技能经验（默认 `Round(0.3 * 输出原料价值 * 输出数量)`）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 精炼完成后调用，给铁匠加经验。

- **`ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`**
  - 用途：把 `CraftingMaterials` 枚举（`IronOre`/`Iron1`…`Iron6`/`Wood`/`Charcoal`）映射到对应的实际 `ItemObject`（如 `DefaultItems.IronIngot1`、`DefaultItems.HardWood`、`DefaultItems.Charcoal`）。
  - 副作用：无，纯查表。
  - 调用时机：精炼、熔炼、打造在换算原料与产出物品时频繁调用；`CampaignCheats` 也用它给主角塞原料。

### 熔炼（Smelting）

- **`int[] GetSmeltingOutputForItem(ItemObject item)`**
  - 用途：返回把一件带武器设计的装备熔炼回原料后的数量数组（长度 9，索引对应 `CraftingMaterials`）。默认实现按各部件的 `MaterialsUsed` 累加，并通过 `AddSmeltingReductions` 把高阶铁锭按“降级守恒”规则折算（如 `Iron6` 减 1 换 `Iron5` 加 1，末位 `index 8` 额外减 1 表示工具损耗）。
  - 副作用：无；返回新数组，不改动 `item`。
  - 调用时机：`SmeltingItemVM` 预览熔炼产出、`CraftingCampaignBehavior` 与 `CraftingVM` 执行熔炼时调用。

- **`int GetSkillXpForSmelting(ItemObject item)`**
  - 用途：熔炼单件装备给予的锻造经验（默认 `Round(0.02 * item.Value)`）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 熔炼完成后调用。

- **`int GetEnergyCostForSmelting(ItemObject item, Hero hero)`**
  - 用途：熔炼消耗的能量（默认基准 10，`PracticalSmelter` perk 加成）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 熔炼前调用，扣减能量。

- **`int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`**
  - 用途：熔炼一件装备获得的研究点数（默认 `1 + Round(0.02 * item.Value)`，`CuriousSmelter` perk 加成）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 熔炼后调用，累加到对应 `CraftingTemplate` 的研究点。

### 打造与设计（Crafting / Design）

- **`int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`**
  - 用途：单块部件（刀身/护手/握柄/柄头）的打造难度贡献（非空部件为 `PieceTier * 50`，空部件为 0）。
  - 副作用：无。
  - 调用时机：被 `CalculateWeaponDesignDifficulty` 内部调用，也供 `TooltipRefresherCollection` 显示单件难度。

- **`int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`**
  - 用途：整件武器设计的难度分值。默认按部件类型加权（刀身 100、握柄 60、护手 20、柄头 20）累加各部件 `GetCraftingPartDifficulty` 后求加权平均并取整。难度越高，产出品质概率越低。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 与 `WeaponDesignVM` 在评估设计、决定品质概率时调用。

- **`ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith)`**
  - 用途：根据设计难度与 `weaponsmith` 的锻造技能/perk，掷骰决定本次打造的 `ItemModifier`（空手返回 `null`，表示无附加词缀）。默认实现用 sigmoid 函数把“技能 − 难度”映射为 Poor…Legendary 品质概率，再经 `ExperiencedSmith`/`MasterSmith`/`LegendarySmith` 调整，并按设计平均阶位 `AdjustQualityRegardingDesignTier` 后从 `ItemModifierGroup` 取对应词缀。
  - 副作用：无；内含随机掷骰，同一输入多次调用结果可能不同。
  - 调用时机：`CraftingCampaignBehavior` 与 `CraftingVM` 完成打造、生成最终物品时调用。

- **`int[] GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`**
  - 用途：返回按该设计打造所需的原料数量数组（长度 9，索引对应 `CraftingMaterials`；负值代表消耗，末位 `index 8` 额外 −1 表示工具损耗）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 与 `CraftingVM` 在显示/执行打造前调用，核对并扣减原料。

- **`int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)` / `int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`**
  - 用途：自由打造模式经验为 `Round(0.02 * item.Value)`；订单打造模式为 `Round(0.1 * item.Value)`（订单奖励更高）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 完成打造后，按是否在订单模式下调用对应方法。

- **`int GetEnergyCostForSmithing(ItemObject item, Hero hero)`**
  - 用途：打造消耗的能量（默认 `10 + 5 * item.Tier`，`PracticalSmith` perk 加成）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 打造前调用，扣减能量。

- **`int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode)`**
  - 用途：打造一件装备获得的研究点数（默认基准 1，叠加 `CuriousSmith` perk 因子，自由模式下再乘 `0.1` 因子，最终 `1 + Floor(0.1 * item.Value * 因子)`）。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 打造后调用，累加研究点。

### 研究（Research）

- **`float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`**
  - 用途：解锁下一个部件所需的研究点数（默认 `Sqrt(100 / totalPartCount) * (openedPartCount * 9 + 10)`）。已开放部件越多，边际成本越高。
  - 副作用：无。
  - 调用时机：`CraftingCampaignBehavior` 在判定研究进度、决定是否开放新部件时调用。

## 示例

读取某铁匠可用的精炼配方，并算出每条配方的能量与经验消耗：

```csharp
Hero weaponsmith = Hero.MainHero;
foreach (Crafting.RefiningFormula formula in Campaign.Current.Models.SmithingModel.GetRefiningFormulas(weaponsmith))
{
    int energy = Campaign.Current.Models.SmithingModel.GetEnergyCostForRefining(ref formula, weaponsmith);
    int xp = Campaign.Current.Models.SmithingModel.GetSkillXpForRefining(ref formula);
    ItemObject outputItem = Campaign.Current.Models.SmithingModel.GetCraftingMaterialItem(formula.Output);
}
```

熔炼主角背包里一件带武器设计的武器，读取其回收原料、研究点与能量成本：

```csharp
ItemObject craftedWeapon = Hero.MainHero.BattleEquipment
    .Where(eq => eq.Item != null && eq.Item.WeaponDesign != null)
    .Select(eq => eq.Item)
    .FirstOrDefault();
if (craftedWeapon != null)
{
    int[] smeltOutput = Campaign.Current.Models.SmithingModel.GetSmeltingOutputForItem(craftedWeapon);
    int researchGain = Campaign.Current.Models.SmithingModel.GetPartResearchGainForSmeltingItem(craftedWeapon, Hero.MainHero);
    int energy = Campaign.Current.Models.SmithingModel.GetEnergyCostForSmelting(craftedWeapon, Hero.MainHero);
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [CraftingCampaignBehavior](../CraftingCampaignBehavior) · [DefaultSmithingModel](../DefaultSmithingModel) · [Crafting](../Crafting) · [Hero](../Hero) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [ItemObject](../../core/ItemObject)
