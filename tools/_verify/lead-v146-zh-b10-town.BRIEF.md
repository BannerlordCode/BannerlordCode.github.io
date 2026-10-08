# brief · b10-town（v1.4.6/zh 手写深页写作线）

- 批次：批 10
- 页面：`content/v1.4.6/zh/api/campaign/Town.md`
- 源文件：`TaleWorlds.CampaignSystem/Settlements/Town.cs`（1,099 行）
- 锚表：`tools/_verify/_tmp/anchors/b10-town.txt`（96 个锚点，派单前生成）
- 派单时刻：2026-10-08T01:20Z
- **本文件落盘理由**（boss #22603 跨线要求）：让「brief 里不出现锚表外的名字」这条规则**可机械检查** —— `grep` 本文件即可。内联 brief 事后不可审计。

---

## 题头三行（命令实测值，非断言）

```
**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Type:** `public class Town : Fief`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`
```

实测命令：`make-anchor-table.mjs` 抽声明行 + `grep -n` 定位。
原始输出：
```
### TaleWorlds.CampaignSystem/Settlements/Town.cs   (wc -l = 1099, anchors = 96)
22: 	public class Town : Fief
```

## 内容提示（**零名字**写法 —— 只描述角色 / 边界 / 主线）

> 请自己读源码后确定要写哪些成员。这一页的主线是：**它作为「经济与治理单元」的那一面** —— 市场与物价、繁荣度与人口、驻军与民兵、建筑与工程、税收与影响力。同时要讲清它的**继承位置**：题头那行已经告诉你它派生的中间基类是谁，请据此说明「它继承到了什么、自己又加了什么」，以及 mod 作者什么时候该用这个类、什么时候该用更外层的聚落对象（外层对象在 `../Settlement`，已入库）。

**自查**：本节不出现任何类型名 / 方法名 / 成员名（`Fief` / `Settlement` 只出现在「题头实测值」与「链接白名单」中，前者有命令支撑、后者是已存在页面路径）。

## 门禁口径（预置，避免 worker 去读校验脚本）

- `checked` = 页面里所有 `文件.cs:N` 形态引用（写全文件名），全文任何位置都算，表格行内也算；要求 `checked ≥ 关键成员表行数`
- `J6=deep_pass` 硬要求 = `## 参见` 里 ≥2 条 markdown 链接
- `J7` = 全文不得出现 `自动生成` / `Auto-generated stub` / `<!-- v*-skeleton -->` / `是 TaleWorlds.X 下的公开类型` / `阅读时先通过属性了解状态`
- `J8` 正文 > 2500 字节；`J9` csharp 块 ≥3 有效行含真实调用；`J10` 链接只在 `## 参见`/`## 导航`；`J11` 叶子目标不带尾斜杠

## 链接白名单（已逐条实测存在）

`../Settlement` `../Village` `../Clan` `../Kingdom` `../Hero` `../MobileParty` `../PartyBase` `../Campaign` `../ItemRoster` `../TroopRoster` `../CampaignObjectManager` `../ExplainedNumber` `../CampaignTime` `../_index` `../../campaign-ext/MBObjectBase` `../../campaign-ext/MBObjectManager` `../../core-extra/Game`

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
- 若源码与 brief 冲突，**以源码为准**并在回报里指出
