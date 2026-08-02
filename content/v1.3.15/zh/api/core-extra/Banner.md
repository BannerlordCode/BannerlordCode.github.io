---
title: "Banner"
description: "Bannerlord 阵营旗帜的运行时数据对象：以颜色 ID、图标网格与背景组成的旗标列表承载一面旗帜的外观，并序列化为可存档的 BannerCode 字符串；由 Clan / Kingdom / Hero 持有。"
---

# Banner

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public class Banner`  
**Base:** 无（不继承 `MBObjectBase`，因此不入 `MBObjectManager` 注册表）  
**File:** `TaleWorlds.Core/Banner.cs`

## 概述

`Banner` 是一面**旗帜在内存里的全部可渲染数据**：它由一串 `BannerData` 组成——第 0 项永远是背景（底色 + 底色 2 + 背景网格 + 旋转），第 1 项起是叠在上面的图标（图标网格、图标颜色、位置、是否镜像、旋转）。这些项再被压成一个用 `.` 分隔的 `BannerCode` 字符串，既能显示也能随家族/王国一起写进存档。

它**不是**一个 3D 游戏物体，也**不是** `MBObjectBase`：你不会把它从 `MBObjectManager` 里按 ID 取出来，而是从持有它的 `Clan` / `Kingdom` 上读到，或用 `BannerManager` 提供的静态工厂方法凭空造一面。真正把颜色 ID 翻译成屏幕上的颜色、把网格 ID 翻译成网格的，是 `BannerManager`；真正把 `Banner` 画出来的是 `Game.Current.CreateBannerVisual(this)` 返回的 `IBannerVisual`。

## 心智模型

把 `Banner` 当作**“一张用数字描述、可序列化的旗帜贴纸”**，而不是场景里飘动的布料。它的整个状态就藏在 `_bannerDataList`（`MBReadOnlyList<BannerData>`）里，所有修改方法（改色、加图标、旋转）本质上都在改这张表，并把缓存的 `_bannerCode` 置空以便下次重新生成旗标码。

- **谁创建 / 谁持有**：游戏世界里绝大多数 `Banner` 由 `Clan` 或 `Kingdom` 在初始化时创建并长期持有（`Clan.Banner`、`Kingdom.Banner`）；`Hero` 自己没有 `Banner`，要通过 `Hero.Clan.Banner` 间接取。模组也可以临时用 `Banner.CreateRandomClanBanner`、`Banner.CreateOneColoredBannerWithOneIcon` 等工厂造一面自用。
- **所在层**：纯数据 + 轻量逻辑，位于 `TaleWorlds.Core`，不依赖战役系统，但渲染依赖 `Game`（即必须在一个运行中的游戏会话里）。
- **何时用**：需要读取或修改某个阵营旗帜的颜色/图标/背景；需要在 UI 或存档里搬运 `BannerCode`；需要为新建家族/王国生成旗帜。
- **何时不要用**：不要为了纯美术预览而 `new` 出一面 `Banner` 再去取 `BannerVisual`——`BannerVisual` 的 `get` 会调用 `Game.Current.CreateBannerVisual(this)`，没有活动游戏时会出问题；物品栏里“旗杆武器”那种旗帜走的是 `BannerComponent`，不是这个运行时对象。也不要假设 `Clan.Banner` 拿到的一定是该家族“独有”的副本（见下方风险段）。
- **依赖谁**：`BannerManager`（颜色与图标注册表）、`BannerData`（存储单元）、`Game`（生成视觉）、`Clan`/`Kingdom`（持久持有与存档）。
- **出错会怎样**：用非法 `BannerCode` 反序列化会得到一张**空表**的 `Banner`，之后任何读背景/读颜色的 getter 会直接 `IndexOutOfRangeException`；传入未在 `BannerManager` 注册的颜色值，`ChangePrimaryColor` / `ChangeIconColors` 会**静默忽略**。

## 如何获取 Banner

```csharp
// 1) 玩家家族的旗帜（最常见的入口）
Banner clanBanner = Clan.PlayerClan.Banner;

// 2) 任意王国的旗帜
Banner kingdomBanner = Kingdom.MainKingdom.Banner;

// 3) 通过英雄 → 家族 → 旗帜
Banner heroBanner = Hero.MainHero.Clan.Banner;

// 4) 以据点所属阵营的旗帜为模板，生成一面单色单图标新旗
uint bg = settlement.MapFaction.Banner.GetFirstIconColor();
uint fg = settlement.MapFaction.Banner.GetPrimaryColor();
Banner newBanner = Banner.CreateOneColoredBannerWithOneIcon(bg, fg, iconMeshId);

// 5) 从存档/配置里读到的 BannerCode 字符串重建（见“序列化”一节）
string code = Clan.PlayerClan.Banner.BannerCode;
Banner rebuilt = Banner.CreateOneColoredEmptyBanner(0);
rebuilt.Deserialize(code);
```

> 注意：`Banner` **不**继承 `MBObjectBase`，所以 `MBObjectManager.Instance.GetObject<Banner>(...)` 是错误用法——没有这样的注册入口。要拿已有的旗帜，请走上面 1–3 的持有方属性；要造新的，走第 4 点的静态工厂。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `BannerCode` | `string` | 由 `_bannerDataList` 序列化得到的旗帜码；首次访问时惰性生成（调用 `Serialize()`）。若表为空则返回空字符串。 |
| `BannerDataList` | `MBReadOnlyList<BannerData>` | 底层旗标列表的只读视图。约定索引 0 为背景，索引 1 起为图标。 |
| `BannerVisual` | `IBannerVisual` | 惰性创建的渲染视觉；首次访问调用 `Game.Current.CreateBannerVisual(this)`。必须在有活动游戏时访问。 |

常用常量：`MaxSize = 8000`、`BannerFullSize = 1528`、`BannerEditableAreaSize = 512`、`MaxIconCount = 32`、`BackgroundDataIndex = 0`、`BannerIconDataIndex = 1`。

## 成员说明（按主题分组）

### 构造函数

`Banner` 提供四个构造函数，但都不进存档、也不进 `MBObjectManager`：

- `Banner()`：造一张**空表**的旗帜，此时读背景/颜色 getter 会抛 `IndexOutOfRangeException`，必须先用 `AddIconData` 或 `Deserialize` 填充。
- `Banner(Banner other)` / `Banner(Banner other, uint color1, uint color2)`：深拷贝另一面旗，并可顺带用 `color1`/`color2` 改主色与图标色。
- `Banner(string bannerKey)` / `Banner(string bannerKey, uint color1, uint color2)`：用 `BannerCode` 直接反序列化构造；`bannerKey` 为空会 `Debug.FailedAssert` 且旗为空。

构造函数一般在战役初始化路径上使用；模组代码更推荐用下面的静态工厂，避免手搓 `BannerCode`。

### 颜色与背景

这些成员操作 `_bannerDataList[0]`（背景项）。**前提是表非空**，否则直接越界。

- `int GetPrimaryColorId()` / `int GetSecondaryColorId()`：读取背景主色/副色的**颜色 ID**（指向 `BannerManager` 调色板）。仅在你想拿 ID 而非颜色值时用。
- `uint GetPrimaryColor()` / `uint GetSecondaryColor()`：通过 `BannerManager.GetColor(id)` 把颜色 ID 翻译成 `uint` 颜色值；表为空时返回 `uint.MaxValue`。
- `void SetPrimaryColorId(int colorId)` / `void SetSecondaryColorId(int colorId)`：直接写入背景的两组颜色 ID。传入的不是 `BannerManager` 里合法的 ID 时不会报错，但渲染出来颜色会错。
- `void ChangePrimaryColor(uint mainColor)`：把 `uint` 颜色值经 `BannerManager.GetColorId` 转成 ID 后同时写入背景主/副色。**若该颜色未在 `BannerManager` 注册，`GetColorId` 返回 -1，本次调用被静默忽略**——这是最常见的“改色没反应”原因。
- `void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)`：分别设置背景主色与副色（双色旗）。同样依赖 `BannerManager` 颜色注册。
- `int GetBackgroundMeshId()` / `void SetBackgroundMeshId(int meshId)`：背景网格 ID 的读写。
- `void RotateBackgroundToRight()` / `void RotateBackgroundToLeft()`：把背景旋转一个步长（`0.0027777778f`，约 1/360 圈），并在 0~1 之间循环。适合做旗帜编辑器里的“转一下”按钮。

```csharp
// 把玩家家族旗改成正红（uint 0xRRGGBB）；颜色必须在 BannerManager 里已注册
Clan.PlayerClan.Banner.ChangePrimaryColor(0xFF2A2Au);

// 双色背景：主色红、副色深蓝
Clan.PlayerClan.Banner.ChangeBackgroundColor(0xFF2A2Au, 0x1A3C8Cu);

// 旋转背景
Clan.PlayerClan.Banner.RotateBackgroundToRight();
```

### 图标

图标指 `_bannerDataList[1..]` 的每一项。背景（索引 0）不算图标。

- `int GetIconColorId()` / `Vec2 GetIconSize()`：读取第 1 个图标的颜色 ID 与尺寸；表不足 2 项时 `GetIconColorId` 会越界。
- `void SetIconColorId(int colorId)` / `void SetIconSize(int newSize)`：改写第 1 个图标的颜色 ID 与尺寸（`Size` 会被设成 `(newSize, newSize)` 的方形）。
- `int GetIconMeshId()` / `void SetIconMeshId(int meshId)`：第 1 个图标的网格 ID 读写。
- `void ChangeIconColors(uint color)`：把**所有**图标（索引 ≥ 1）的颜色 ID 与副色 ID 统一改成某个 `uint` 颜色值；同样依赖 `BannerManager` 注册，未注册则静默忽略。
- `void AddIconData(BannerData iconData)` / `void AddIconData(BannerData iconData, int index)`：追加或在指定位置插入一个图标。`_bannerDataList` 总数达到 33（背景 + 最多 32 图标）后追加被拒；带 `index` 的重载还要求 `index > 0` 且 `index <= 总数`。
- `void RemoveIconDataAtIndex(int index)`：移除指定图标；要求 `index > 0` 且 `index < 总数`（背景删不掉）。
- `void ClearAllIcons()`：保留背景（索引 0），删掉其余所有图标。
- `BannerData GetBannerDataAtIndex(int index)`：取任意一项，不存在返回 `null`，并把缓存 `_bannerCode` 置空。
- `int GetBannerDataListCount()` / `bool IsBannerDataListEmpty()`：列表长度与判空。

```csharp
Banner banner = Clan.PlayerClan.Banner;
// 给旗帜再加一个图标：颜色 ID 必须来自 BannerManager（这里用 GetColorId 转 uint）
int colorId = BannerManager.GetColorId(0xFFD700u);
if (colorId >= 0)
{
    BannerData icon = new BannerData(
        iconMeshId, colorId, colorId,
        new Vec2(512f, 512f), new Vec2(764f, 764f), false, false, 0f);
    banner.AddIconData(icon);
}

// 把所有图标改成金色
banner.ChangeIconColors(0xFFD700u);

// 只留背景、清掉全部图标
banner.ClearAllIcons();
```

### 序列化

`Banner` 的持久形态就是 `BannerCode` 字符串。存档时 `Clan` / `Kingdom` 会把持有的 `Banner` 一起写盘（底层存的是 `_bannerDataList`，`[SaveableField(1)]`）。

- `string Serialize()`：调用 `GetBannerCodeFromBannerDataList(_bannerDataList)` 重新生成旗标码。`BannerCode` 属性就是惰性调用它。
- `void Deserialize(string message)`：用旗标码重建：先清掉缓存视觉，再清空列表，然后 `TryGetBannerDataFromCode` 解析填入。**若 `message` 非法，解析失败、列表被清空变成空表**——这张旗之后任何读背景/颜色的 getter 都会越界崩溃。所以反序列化前务必先 `IsValidBannerCode` 校验。
- `static bool IsValidBannerCode(string bannerCode)`：空串直接返回 `false`，否则委托 `TryGetBannerDataFromCode`。
- `static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)`：真正的解析器，按每 10 个字段一段拆分字符串；任一字段解析失败整体返回 `false` 并清空输出；超过 32 项只保留前 32。

```csharp
string code = Clan.PlayerClan.Banner.BannerCode;
if (Banner.IsValidBannerCode(code))
{
    Banner copy = Banner.CreateOneColoredEmptyBanner(0);
    copy.Deserialize(code); // 用校验过的码重建，避免空表崩溃
    // copy 现在与源旗外观一致，可自由改色而不影响原旗
    copy.ChangePrimaryColor(0x00AEEFu);
}
```

### 静态工厂

这些是最常被模组调用的入口，返回全新的 `Banner`，无需先有实例：

- `static Banner CreateRandomClanBanner(int seed = -1)`：生成一面随机旗，但强制为“居中单图标”布局，适合做家族默认旗。`seed = -1` 表示用随机种子。
- `static Banner CreateRandomBanner()`：完全随机布局（单图标/双镜像/对角/横排/竖排/四宫格随机选）。
- `static Banner CreateOneColoredEmptyBanner(int colorIndex)`：只有一张单色背景、没有图标的旗；`colorIndex` 是 `BannerManager` 的颜色 ID。
- `static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)`：单色背景 + 一个居中图标，`backgroundColor`/`iconColor` 是 `uint` 颜色值（`BannerManager.GetColorId` 转换），`iconMeshId` 传 -1 则随机选图标。建家族/建国时造旗首选。
- `static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)`：把一组 `BannerData` 直接压成旗标码，可用于纯数据层构造码而无需 `Banner` 实例。

```csharp
// 为新建家族造一面旗：底色取文化主色，图标取该文化某个图标网格
uint bg = cultureBanner.GetPrimaryColor();
Banner clanBanner = Banner.CreateOneColoredBannerWithOneIcon(bg, 0xFFFFFFFFu, newClanIconId);
clanToFound.Banner = clanBanner;
```

### 视觉

- `void SetBannerVisual(IBannerVisual visual)`：直接替换缓存的渲染视觉。一般游戏内部在 `BannerVisual` 的 `get` 里自动创建，不需要手动调用；若你持有自定义 `IBannerVisual` 实现，可用它覆盖。

## 风险与崩溃边界

1. **空表越界**：`new Banner()` 造出的旗 `_bannerDataList` 为空。任何 `GetPrimaryColorId`、`GetBackgroundMeshId`、`GetIconColorId`、`GetIconSize` 等都会 `IndexOutOfRangeException`。务必先 `AddIconData` 或 `Deserialize` 填充，或用工厂方法。
2. **非法 `BannerCode` 反序列化**：`Deserialize` 对非法码不会抛异常，而是把列表清空——留下一张“外表有码、内部为空”的旗，后续 getter 崩溃。`Clan`/`Kingdom` 从 XML 加载时若节点缺失会落到 `CreateRandomClanBanner`，但手动 `Deserialize` 用户输入前一定先 `IsValidBannerCode`。
3. **颜色静默忽略**：`ChangePrimaryColor` / `ChangeBackgroundColor` / `ChangeIconColors` 依赖 `BannerManager.GetColorId`。传入未注册的颜色值会直接 return，旗“看起来没变”。需要动态上色时，先确认颜色来自 `BannerManager` 调色板（`BannerManager.GetColorId(x) >= 0`）。
4. **Ruling Clan 共享王国旗引用**：`Clan.Banner` 的 getter 在“该家族是王国统治家族”时直接返回 `this.Kingdom.Banner`（同一对象引用，见 `Clan.cs:738`）。此时你改 `clan.Banner` 的颜色，会**顺带改掉整个王国的旗**。`Clan.ClanOriginalBanner` 才能拿到该家族自己的那份（仅当 `_banner` 非空）。给家族换旗前，先确认它不是统治家族，或显式 `clan.Banner = newBanner` 赋一个新实例覆盖掉继承。
5. **`BannerVisual` 需要活动游戏**：`BannerVisual` 的 `get` 调用 `Game.Current.CreateBannerVisual(this)`。在战役/任务之外的上下文（如无头工具、菜单早期）访问它可能拿到 null 或失败。只做数据搬运（读/写 `BannerCode`、改色）不需要它。
6. **`Banner` 不入 `MBObjectManager`**：它是普通 `public class`，没有 `StringId`、不是 `MBObjectBase`。不要用 `MBObjectManager.Instance.GetObject<Banner>` 去取——没有这种入口，运行时会找不到。

## 依赖图

**上游（本对象依赖谁）**

- [BannerManager](../BannerManager/) —— 颜色调色板与图标/背景网格注册表；所有颜色 ID 经它翻译。
- [BannerData](../BannerData/) —— 单条旗标数据（网格、颜色 ID、位置、旋转、镜像）。
- [IBannerVisual](../IBannerVisual/) —— 旗帜的渲染接口，`Game` 负责创建具体实现。
- [Game](../Game/) —— 提供 `CreateBannerVisual`，把数据变成可显示的视觉。

**下游（谁持有 / 使用本对象）**

- [Clan](../../campaign/Clan/) —— 家族旗帜，存于 `Clan.Banner` 并与家族一起存档。
- [Kingdom](../../campaign/Kingdom/) —— 王国旗帜，存于 `Kingdom.Banner`。
- [Hero](../../campaign/Hero/) —— 英雄自身无旗，经 `Hero.Clan.Banner` 间接取。
- [CharacterObject](../../campaign/CharacterObject/) —— 角色模板，家族/文化关系决定其旗帜来源。
- [BannerComponent](../BannerComponent/) —— 物品上的“旗杆武器”组件，与运行时 `Banner` 是两条不同路径。
- [BannerImageIdentifier](../BannerImageIdentifier/) —— 旗帜图像标识（如外交/议价界面 `JoinKingdomAsClanBarterable` 用 `TargetKingdom.Banner` 构造）。

## 典型用法示例

### 示例 1：给玩家家族旗换主色（并避免误改王国旗）

```csharp
// 取玩家家族旗；若玩家是统治家族，这其实是王国旗的同一引用
Banner clanBanner = Clan.PlayerClan.Banner;
if (Clan.PlayerClan == Clan.PlayerClan.Kingdom.RulingClan)
{
    // 统治家族：赋一个独立新实例覆盖继承，避免改色波及王国旗
    clanBanner = Banner.CreateOneColoredBannerWithOneIcon(
        Clan.PlayerClan.Banner.GetPrimaryColor(), 0xFFFFFFFFu, -1);
    Clan.PlayerClan.Banner = clanBanner;
}
clanBanner.ChangePrimaryColor(0xFF2A2Au);
```

### 示例 2：为新建家族生成并赋一面单色单图标旗

```csharp
uint bg = settlement.MapFaction.Banner.GetPrimaryColor();
Banner newClanBanner = Banner.CreateOneColoredBannerWithOneIcon(bg, 0xFFFFFFFFu, clanIconMeshId);
clanToFound.Banner = newClanBanner;
InformationManager.DisplayMessage(new InformationMessage("新家族旗帜已生成"));
```

### 示例 3：校验并复制一面旗的 BannerCode

```csharp
string code = Kingdom.MainKingdom.Banner.BannerCode;
if (Banner.IsValidBannerCode(code))
{
    Banner snapshot = Banner.CreateOneColoredEmptyBanner(0);
    snapshot.Deserialize(code);
    // snapshot 与王国旗外观一致，可单独调色而不动原旗
    snapshot.ChangeIconColors(0xFFD700u);
}
```

## 跨版本提示

- **v1.3.15 与 v1.4.5**：`Banner` 的公开 API 完全一致（构造函数、`ChangePrimaryColor`、`Deserialize`/`Serialize`、各静态工厂、常量均相同）。唯一差异是反编译后的枚举 `BannerIconOrientation` 在 1.4.5 源码里被提到类顶部，对调用方无影响。
- **更早的 v1.3.0**：`Banner` 同样存在且 API 一致；若你的 mod 同时要兼容旧版，直接使用上述工厂与 `Clan.Banner` / `Kingdom.Banner` 即可，无需版本分支。

## 参见

- [BannerManager](../BannerManager/) —— 颜色与图标注册表，改色前先确认颜色已注册。
- [BannerData](../BannerData/) —— 单条旗标数据的字段含义。
- [IBannerVisual](../IBannerVisual/) —— 旗帜渲染接口。
- [Clan](../../campaign/Clan/) —— `Clan.Banner` 是拿到家族旗的主要入口。
- [Kingdom](../../campaign/Kingdom/) —— `Kingdom.Banner` 是王国旗。
- [Hero](../../campaign/Hero/) —— 经 `Hero.Clan.Banner` 取英雄所属家族旗。
- [BannerComponent](../BannerComponent/) —— 物品上的旗帜组件（另一条路径）。

## 导航

- ↑ 父级：[core-extra 索引](../)
- ↔ 同级：[BannerManager](../BannerManager/)、[BannerData](../BannerData/)、[BannerColor](../BannerColor/)、[IBannerVisual](../IBannerVisual/)、[Game](../Game/)
- 相关类型：[Clan](../../campaign/Clan/)、[Kingdom](../../campaign/Kingdom/)、[Hero](../../campaign/Hero/)、[BannerComponent](../BannerComponent/)、[BannerImageIdentifier](../BannerImageIdentifier/)
