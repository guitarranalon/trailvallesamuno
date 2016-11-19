###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

###
# Helpers
###
set :relative_links, true
# Methods defined in the helpers block are available in templates
helpers do
 
  def nav_active(path)
    current_page.path == path ? "active" : ""
  end

  def compute_path(destination)
    if current_page.path == destination
	  return nil
	else
	  path_parts = current_page.path.split("/")
	  destination_parts = destination.split("/")

	  if path_parts.slice(0, path_parts.length-1).join("/") == destination_parts.slice(0, destination_parts.length-1).join("/")
	    return destination_parts[destination_parts.length - 1]
	  else
	    return ("../" * (path_parts.length-1)) + destination
    end
	end
  end
  
  def link_orNot(page)
	  current_page.path == page.path ? "<span>" + page.name + "</span>" : "<a href='" + compute_path(page.path) + "' title='" + page.title + "'>" + page.name + "</a>"
  end

  def home_link(svgMapPath, svgClass, symbolId)
	svg_link(svgMapPath, svgClass, symbolId, "Inicio", "index.html", "Ir a la página de inicio")
  end

  def svg_link(svgMapPath, svgClass, symbolId, self_page_name, self_page_path, self_page_title)
    svg = "<svg class=\"icon #{svgClass}\">
            <use xlink:href=\"" + compute_path("#{svgMapPath}") + "##{symbolId}\"></use>
          </svg>"
    current_page.path == self_page_path ? "<span>" + svg + self_page_name + "</span>" : "<a href='" + compute_path(self_page_path) + "' title='" + self_page_title + "'>" + svg + self_page_name + "</a>"
  end
end

configure :development do
  
  # support run from local directory (favicons not supported)
  activate :relative_assets
  set :relative_links, true
end


# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
  
  activate :relative_assets
  set :relative_links, true
end
