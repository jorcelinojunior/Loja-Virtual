using Microsoft.EntityFrameworkCore.Migrations;

namespace LojaVirtual.Repositorio.Migrations
{
    public partial class NovaColunaProdutoNomeArquivo2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NomeArquivo",
                table: "Produtos",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NomeArquivo",
                table: "Produtos",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 200,
                oldNullable: true);
        }
    }
}
